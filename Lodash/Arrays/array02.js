const _ = require('lodash')

const data = ['a', 'hi',0, null, 'amar', undefined, 'world', '', false, NaN, 'namaste'];

const result = _.compact(data)
console.log(result);



//create an array with all falsy values removed.
// The values are null, undefined, 0 , " ", NaN, false