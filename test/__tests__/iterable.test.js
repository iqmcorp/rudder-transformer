const integration = "iterable";
const name = "Iterable";

const fs = require("fs");
const path = require("path");

const version = "v0";

const transformer = require(`../../src/${version}/destinations/${integration}/transform`);

const inputDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}_input.json`)
);
const outputDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}_output.json`)
);

const inputData = JSON.parse(inputDataFile);
const expectedData = JSON.parse(outputDataFile);

// Router Test Data
const inputRouterDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}_router_input.json`)
);
const outputRouterDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}_router_output.json`)
);
const inputRouterData = JSON.parse(inputRouterDataFile);
const expectedRouterData = JSON.parse(outputRouterDataFile);

// Mocking IDENTIFY_MAX_BODY_SIZE and IDENTIFY_MAX_BATCH_SIZE variable to test batching
jest.mock(`../../src/${version}/destinations/${integration}/config`, () => {
  const originalConfig = jest.requireActual(`../../src/${version}/destinations/${integration}/config`);
  return {
    ...originalConfig,
    IDENTIFY_MAX_BODY_SIZE: 450,
    IDENTIFY_MAX_BATCH_SIZE: 2
  };
});


inputData.forEach((input, index) => {
  it(`${name} Tests: payload: ${index}`, async () => {
    try {
      const output = transformer.process(input);
      expect(output).toEqual(expectedData[index]);
    } catch (error) {
      expect(error.message).toEqual(expectedData[index].message);
    }
  });
});

describe(`${name} Tests`, () => {
  describe("Router Tests", () => {
    // inputRouterData are object of arrays with keys `rETL` and `others` for input data of the respective sources
    Object.keys(inputRouterData).forEach(index => {
      it(`${name} Tests: payload: ${index}`, async () => {
        const routerOutput = await transformer.processRouterDest(
          inputRouterData[index]
        );
        expect(routerOutput).toEqual(expectedRouterData[index]);
      });
    });
  });
});
