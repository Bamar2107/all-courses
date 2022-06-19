"use strict";
//casting is the type to override the type
let yourname = 'amarendra';
console.log(yourname); //output will be amarendra but if we add any property like length then it will gives an error because
//number dosen't have length 
let b = 'hello world';
console.log(b.length);
// using <> 
let c = 'India is my country';
console.log(c);
//force casting
//first cast to the unknown type then to the target type
let d = 'Bhagbat Gita';
console.log(d);
console.log(`Length of ${d} string is : ${d.length}`);
