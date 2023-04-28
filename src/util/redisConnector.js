const Redis = require('ioredis');
const { RedisError } = require('../v0/util/errorTypes');
const log = require('../logger');
const stats = require('./stats');
const { isDefinedAndNotNull } = require('../v0/util');

const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(
    () => resolve(),
    50
  );
});

const RedisDB = {
  init() {
    if (process.env.USE_REDIS_DB && process.env.USE_REDIS_DB !== 'false') {
      this.host = process.env.REDIS_HOST || 'localhost';
      this.port = parseInt(process.env.REDIS_PORT, 10) || 6379;
      this.password = process.env.REDIS_PASSWORD;
      this.userName = process.env.REDIS_USERNAME;
      this.maxRetries = parseInt(process.env.REDIS_MAX_RETRIES || 30, 10);
      this.timeAfterRetry = parseInt(process.env.REDIS_TIME_AFTER_RETRY_IN_MS || 10, 10);
      this.client = new Redis({
        host: this.host,
        port: this.port,
        password: this.password,
        username: this.userName,
        enableReadyCheck: true,
        retryStrategy: (times) => {
          if (times <= this.maxRetries) {
            return 10 + times * this.timeAfterRetry;
          }
          stats.increment('redis_down', {
            errorType: "Redis",
            timestamp: Date.now()
          });
          log.error(`Redis is down at ${this.host}:${this.port}`);
          return false; // stop retrying
        },
      });
      this.client.on('ready', () => {
        stats.increment('redis_ready', {
          timestamp: Date.now(),
        });
        log.info(`Connected to redis at ${this.host}:${this.port}`);
      });
    }
  },
  /**
   * Checks connection with redis and if not connected, tries to connect and throws error if connection request fails
   */
  async checkAndConnectConnection() {
    if (!this.client) {
      this.init();
    }
    else if (this.client.status !== 'ready') {
      await Promise.race([this.client.connect(), timeoutPromise])
    }
  },
  /**
   * Used to get value from redis depending on the key and the expected value type
   * @param {*} key key for which value needs to be extracted
   * @param {*} isJsonExpected false if fetched value can not be json
   * @returns value which can be json or string or number
   *
   */
  async getVal(key, isObjExpected = true) {
    try {
      await this.checkAndConnectConnection(); // check if redis is connected and if not, connect
      let value;
      if (isObjExpected === true) {
        value = await this.client.hmget(key);
        if (isDefinedAndNotNull(value)) {
          Object.keys(value).forEach(Key => {
            try {
              value[Key] = JSON.parse(value[Key]);
            } catch (e) {
              // do nothing
            }
          });
        }
      } else {
        value = await this.client.get(key);
      }
      const bytes = Buffer.byteLength(JSON.stringify(value), "utf-8");
      stats.gauge('redis_get_val_size', bytes, {
        timestamp: Date.now()
      });
      return value;
    } catch (e) {
      stats.increment('redis_get_val_error', {
        errorType: "Redis",
        timestamp: Date.now()
      });
      throw new RedisError(`Error getting value from Redis: ${e}`);
    }
  },
  /**
   * Used to set value in redis depending on the key and the value type
   * @param {*} key key for which value needs to be stored
   * @param {*} value to be stored in redis send it in array format [field1, value1, field2, value2]
   *                  if Value is an object
   * @param {*} expiryTime expiry time of data in redis by default 1 hr
   * @param {*} isValJson set to false if value is not a json object 
   * 
   */
  async setVal(key, value, expiryTime = 60 * 60) {
    try {
      await this.checkAndConnectConnection(); // check if redis is connected and if not, connect
      let bytes;
      if (typeof value === "object") {
        const valueToStore = value.map(element => {
          if (typeof element === "object") {
            return JSON.stringify(element);
          }
          return element;
        })
        bytes = Buffer.byteLength(JSON.stringify(value), "utf-8");
        await this.client.multi()
          .hmset(key, ...valueToStore)
          .expire(key, expiryTime)
          .exec();
      } else {
        bytes = Buffer.byteLength(value, "utf-8");
        await this.client.setex(key, expiryTime, value);
      }
      stats.gauge('redis_set_val_size', bytes, {
        timestamp: Date.now()
      });
    } catch (e) {
      stats.increment('redis_set_val_error', {
        errorType: "Redis",
        timestamp: Date.now()
      });
      throw new RedisError(`Error setting value in Redis due ${e}`);
    }
  },
  async disconnect() {
    if (process.env.USE_REDIS_DB && process.env.USE_REDIS_DB !== 'false') {
      stats.increment('redis_graceful_shutdown', {
        timestamp: Date.now(),
      });
      this.client.quit();
    }
  }
};

module.exports = { RedisDB };
