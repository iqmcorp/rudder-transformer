const fs = require("fs");
const path = require("path");
const version = "v0";

const sourcesList= ['Shopify']
describe(`Source Tests`, () => {
sourcesList.forEach((source)=>{
  const testDataFile = fs.readFileSync(
    path.resolve(__dirname, `./data/redis/${source}_source.json`)
  );
  const data = JSON.parse(testDataFile);
  const transformer = require(`../../src/${version}/sources/${source}/transform`);
  
  data.forEach((dataPoint, index) => {
    it(`${index}. ${source} - ${dataPoint.description}`, async() => {
      try {
        const output = await transformer.process(dataPoint.input);
        expect(output).toEqual(dataPoint.output);
      } catch (error) {
        expect(error.message).toEqual(dataPoint.output.error);
      }
    });
  });
})
})
