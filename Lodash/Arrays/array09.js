const _ = require('lodash');
const data = [['a',1], ['b',2], ['c',3]];

const result = _.fromPairs(data);
console.log(result);

//The inverse of _.toPairs; this method returns an object composed from key-value pairs.