const _ = require('lodash');

const data = [1,2,3,4,5,6,7,8,9]
const res = _.slice(data,1,6);
console.log(res);

//Creates a slice of array from start up to, but not including, end.
