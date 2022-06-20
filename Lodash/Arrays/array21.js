const _ = require('lodash');
const data = _.union([2],[2,4],[4,6],[2,7,6],[1,6])
console.log(data);
//Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for equality comparisons.


const data1 = _.unionBy([2],[2,4],[4,6],[2,7,6],[1,6], function(num){return num>3})
console.log(data1);
//