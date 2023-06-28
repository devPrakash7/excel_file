
const moment = require('moment');


exports.set_current_time_stamp = () => {

     return moment().format("X");
}

