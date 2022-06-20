const _ = require('lodash');
const data = [1, 3,3,6, 7,8,9,9,14,17,17,17];
const res = _.take(data,7)
console.log(res);

//Creates a slice of array with n elements taken from the beginning.

const res1 = _.takeRight(data,4)
console.log(res1);
//Creates a slice of array with n elements taken from the end. But output will always from left to right

const users = [
    {'name':'a','active':true},
    {'name':'b','active':false},
    {'name':'c','active':false},
]
//const res2 = _.takeRightWhile(users, ['active',false]);
//const res2 = _.takeRightWhile(users, ['active',true]);            => This gives an empty array
const res2 = _.takeRightWhile(users, function(user){ return !user.active});
console.log(res2);
//Creates a slice of array with elements taken from the end. Elements are taken until predicate returns falsey.Means it checks only falsey value
//The predicate is invoked with three arguments: (value, index, array).

const res3 = _.takeWhile(users, function(user) {return !user.active});
console.log(res3);