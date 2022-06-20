const _ = require('lodash');

const data = [1,4,2,6,3,5,3,6,2,5];
//const res1 = _.pull(data,3,2)
//console.log(res1);
//Removes all provided values from array using SameValueZero for equality comparisons.


const res2 = _.pullAll(data,[5,6]);
console.log(res2);
//This method is like _.pull except that it accepts an array of values to remove.




const array = [{'x':2},{'x':3},{'x':6},{'x':3},{'x':4},{'x':2}];
const res3 = _.pullAllBy(array, [{'x':3},{'x':2}], 'x');
console.log(res3);
//This method is like _.pullAll except that it accepts iteratee which is invoked for each element of array and values to to generate the criterion by which uniqueness is computed. 
//The iteratee is invoked with one argument: (value).

const fruits = ['apple','mango','pineapple','guava','strawberry','lichi','banana'];
const res4 = _.pullAt(fruits,[2,5])
console.log(res4);
//Removes elements from array corresponding to the given indexes and returns an array of the removed elements. 
//Indexes may be specified as an array of indexes or as individual arguments.