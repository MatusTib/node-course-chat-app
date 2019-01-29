// Jan 1st 1970 00:00:00 am === 0 in milisecs

var moment = require('moment');

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var date = moment();
// date.add(100, 'year').subtract(9, 'days');
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));