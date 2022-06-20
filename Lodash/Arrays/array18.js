const _ = require('lodash');

const data = [1, 3,3,6, 7,8,9,9,14,17,17,17];

const res2 = _.uniq(data)
console.log(res2);
//Returns the new duplicate free array.

const res3 = _.uniqBy(data, Math.floor)
console.log(res3);



const res = _.sortedUniq(data);
//console.log(res);
//This method is like _.uniq except that it's designed and optimized for sorted arrays.

const data1 = [1.1,1.2,2.3,2.4];
const res1 = _.sortedUniqBy(data1,Math.floor)
//console.log(res1);
//This method is like _.uniqBy except that it's designed and optimized for sorted arrays.
