const _ = require('lodash')

const array1 = [12,13]

const result = _.concat(array1, 14, 15, [16], [[17]])
console.log(result);


//Creates a new array concatenating array with any additional arrays and/or values.