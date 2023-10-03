const res = require("../utilities/utils/index");
const list = require("../country/state/city/index");
const getPeopleInCity = (list) => {
  return res(list);
};
module.exports = getPeopleInCity;
