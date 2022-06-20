const _ = require('lodash')

const data = [12,13, 14, 15,16]

const result1= _.drop(data)
console.log(result1);

const result2= _.drop(data,2)
console.log(result2);

const res3 = _.drop(data,0)
console.log(res3);

//Creates a slice of array with n elements dropped from the beginning. Default drop value is 1.


const res4 = _.dropRight(data);
console.log(res4);

//Creates a slice of array with n elements dropped from the end. Default drop value is 1.


const users = [
    {name:'Amar', active:true},
    {name:'Anil', active:false},
    {name:'Raja', active:false}
]

const userdata = _.dropRightWhile(users, function(user){ return !user.active})
console.log('Active user is : ',userdata);

//Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. 
//The predicate is invoked with three arguments: (value, index, array).



//                              dropWhile                   
//Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. 
//The predicate is invoked with three arguments: (value, index, array).