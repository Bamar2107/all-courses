const _ = require('lodash');
const data = [2,4,9,8,12,10,7,13,19]
const result = _.remove(data, function(num){return num%2===0})
console.log(result);

//Removes all elements from array that predicate returns truthy for and returns an array of the removed elements.
// The predicate is invoked with three arguments: (value, index, array).