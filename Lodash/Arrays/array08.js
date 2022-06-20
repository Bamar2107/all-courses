const _ = require('lodash');

const data = [1,2, [3,4], 5,[6,[7,8,[9,10,11]]]];

const res1 = _.flatten(data)
console.log(res1);
//Flattens array a single level deep.

const res2 = _.flattenDeep(data);
console.log(res2);

//Recursively flattens a nested array. That means it can extracts arrays from any deep level.

const res3 = _.flattenDepth(data,2);
console.log(res3);

//Recursively flatten array up to depth times.