"use strict";
function merge(a, b) {
    return Object.assign(a, b);
}
const mergerOutput = merge({ name: "Amar" }, { age: 30 });
//here above if we pass 2nd argument 30 as numeric value then it will not throw an error becasue in function declaration it consider as number as 2nd parameter
//so to overcome from this problem we must use extends in generic types
//we can extends from any type like numeric,string,boolean etc or we can extends union types also.
console.log(mergerOutput);
