const _ = require('lodash');


const users = [
    {'name':'Amar', 'active':true},
    {'name':'anil', 'active':false},
    {'name':'Ashok', 'active':false},
    {'name':'Nirmala', 'active':false},
]

const result = _.findIndex(users, {'active':true})
console.log(result);

// _.findIndex method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.


const res = _.find(users, {'name':'Amar'});
console.log(res);

const res1 = _.findLastIndex(users, {'name':'Ashok'});
console.log(res1);

//This method is like _.findIndex except that it iterates over elements of collection from right to left.