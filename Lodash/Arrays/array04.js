const _ = require('lodash')




//**** diffenence */


const result = _.difference([2,1], [2,3])
console.log(result);

//Creates an array of array values not included in the other provided arrays using SameValueZero for equality comparisons.
// The order and references of result values are determined by the first array.





//****** differenceby */


const data = _.differenceBy([2.1,1.3], [2.3,3.4], Math.floor);
console.log(data);

//This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. 
//The order and references of result values are determined by the first array. The iteratee is invoked with one argument: (value).






