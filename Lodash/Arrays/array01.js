const _ = require('lodash')

const data = ['a', 'b', 'c' , 'd', 'e', 'f'];

const result = _.chunk(data, 7);
console.log(result);



// Creates an array of elements split into groups the length of size. 
// If collection can’t be split evenly, the final chunk will be the remaining elements.