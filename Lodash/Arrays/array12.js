const _ = require('lodash');

const result = _.intersection([1,2], [2,3], [4,2]);
console.log(result);


//Creates an array of unique values that are included in all of the provided arrays using SameValueZero for equality comparisons.


const res1 = _.intersectionBy([1.2,2.5],[2.8,5.3],[1.9,2.0], Math.floor);
console.log(res1);

//This method is like _.intersection except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which uniqueness is computed.
// The iteratee is invoked with one argument: (value).