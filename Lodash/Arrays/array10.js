const _ = require('lodash');
const data = ['mango','kiwi','lichi','apple','guava','pineapple']

const result = _.head(data);
console.log(result);

//Gets the first element of array.


const res = _.last(data);
console.log(res);
//Gets the last element of array.

const join = _.join(data, "--");
console.log(join);

//Converts all elements in array into a string separated by separator.

const nth = _.nth(data,-3);
console.log(nth);
//Gets the element at index n of array. If n is negative, the nth element from the end is returned.