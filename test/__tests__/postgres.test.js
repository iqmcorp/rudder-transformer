const { getDataType } = require("../../src/warehouse/index");
const {
  getDataTypeOverride
} = require("../../src/v0/destinations/postgres/transform");

var testCases = [
  {
    name: "normalInt",
    data: 1,
    type: "int"
  },
  {
    name: "normalFloat",
    data: 2.01,
    type: "float"
  },
  {
    name: "normalBoolean",
    data: true,
    type: "boolean"
  },
  {
    name: "normalString",
    data: "postgres transformation[*007}",
    type: "string"
  },
  {
    name: "violationErrors",
    data: [
      {
        message:
          "no schema for eventName : Product Purchased new, eventType : track in trackingPlanID : tp_20dfXJDpotQWHe7hMxfQfgWMZDv::1",
        meta: {},
        type: "Unplanned-Event"
      }
    ],
    type: "json"
  }
];

describe("Postgres data types testing", () => {
  let options = {};
  options.getDataTypeOverride = getDataTypeOverride;
  testCases.forEach(testCase => {
    it(`should return data type ${testCase.type} for this input data ${testCase.data} everytime`, () => {
      var dataType = getDataType(testCase.name, testCase.data, options);
      expect(dataType).toEqual(testCase.type);
    });
  });
});
