const redis = require('redis');
const log = require('../logger');

let a = 1;
const host = process.env.REDIS_HOST || 'localhost';
const port = process.env.REDIS_PORT || 6379;
const password = process.env.REDIS_PASSWORD || '';
const DBConnector = {
  redisInstance: redis.createClient({
    socket: {
      host,
      port,
    },
    password,
  }),
  async getRedisInstance() {
    if (!DBConnector.redisInstance?.isOpen) {
      await DBConnector.redisInstance
        .connect()
        .then((res) => {
          log.info("Redis Connected!");
          a += 1;
        })
        .catch((err) => {
          log.info(`err happened while connecting to redis ${err}`);
        });
    }
    return DBConnector.redisInstance;
  },
};
process.on('exit', async () => {
  await DBConnector.redisInstance.quit().then((res) => {
    log.info(`Redis Instance Terminated Gracefully ${res}`);
  });
});
module.exports = { DBConnector };
