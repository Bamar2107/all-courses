const _ = require('lodash')

const data = [12,13, 14, 17]

//const result1 = _.fill(data, 'amar')
//console.log(result1);

const result2 = _.fill(data,'*',1,data.length-1)
console.log(result2);

//Fills elements of array with value from start up to, but not including, end.

