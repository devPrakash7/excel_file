
const moment = require("moment");

function isEmail(email) {
    // Define a regular expression to match the desired email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);

  }

  const isString = function (value) {
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true
};

const isNumber = function (value) {
    if (typeof value === 'number' && value.toString().trim().length === 0 ) return false
    return true
};

const isValidStatus = function(status) {
    return ['yes' , 'no'].indexOf(status) !== -1
};

const check_date_formate = (date) => {

    return moment(date).format("X")
}

  module.exports = {isEmail , isString , isNumber,
    isValidStatus,check_date_formate}