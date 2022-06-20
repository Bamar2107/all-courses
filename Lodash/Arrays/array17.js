const _ = require('lodash');
const data = [1,2,4,5,7,8];

const res = _.sortedIndex(data,6);
console.log(res);
//Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order


const res1 = _.sortedIndexOf(data,5);
console.log(res1);
//This method is like _.indexOf except that it performs a binary search on a sorted array.

const res2 = _.sortedLastIndex(data,9);
console.log(res2);
//This method is like _.sortedIndex except that it returns the highest index at which value should be inserted into array in order to maintain its sort order.


//sortedIndexBy and sortedLastIndexBy accepts a function as their 3rd parameter