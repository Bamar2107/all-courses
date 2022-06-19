//normal way to call a function

let a=5,b=6;
function add()
{
    console.log(`sum of a & b is ${a+b}`);

}
add();

//convert above function into fat arrow function

const sum = () => `sum of a & b is ${(a=5) + (b=6)}`
console.log(sum());