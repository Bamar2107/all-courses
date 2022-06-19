//primitive are copied by their value where as objects are copied by their reference

let x= 10;
let y=x;

x= 30;
console.log(x + " "+y);

let a = {value :10};

let b =a;

a.value=40;

console.log(a.value+" "+b.value);

//primitive in a function
let num = 10;
function increase(num){
    num++;
}
increase(num);
console.log(num);



//object in functiom
let obj = {value:10};
function increment(obj){
    obj.value++;
}
increment(obj);
console.log(obj.value);