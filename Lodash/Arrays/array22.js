const _ = require('lodash');


console.log(_.zip([1,2],['a','b'],[true,false]));
//retuns the new array of grouped elements

const data = ['a','b','c'];
const res1 = _.zipObject(data,[22,34,45]);
console.log(res1);
//This method is like _.fromPairs except that it accepts two arrays, one of property identifiers and one of corresponding values.
//retuns object of grouped elements

console.log(_.zipWith([1,3],[34,65],[100,200], function(a,b,c){
    return a+b+c
}));
//This method is like _.zip except that it accepts an iteratee to specify how grouped values should be combined. Returns new array of grouped elements.