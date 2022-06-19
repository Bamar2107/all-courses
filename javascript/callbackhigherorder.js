const add = (a,b) =>{
    return a+b;
}
const sub = (a,b) =>{
    return a-b;
}
const mul = (a,b) =>{
    return a*b;
}
const div = (a,b) =>{
    return a/b;
}

//here above all four methods are call back function it is used as an argument inside an another function called calculate

const calculate = (num1,num2,operator) => {
    return operator(num1,num2);
}
//here calculate is higher order function because inside calculate another function is accepted as an argument that is above 4 methods


console.log(calculate(3,5,add));

function  outer(a) {
    let b=10;
    function inner(){
        console.log(`sum of the number is ${a+b}`);
    }
   return inner;
}



let closurecheck= outer(5);
console.dir(closurecheck);