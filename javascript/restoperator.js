/*  below code are the traditional way of calling a function with arguments


function sum(){
//     console.log(arguments);
//     let sum=0;
//     for(let i in arguments){
//         sum += arguments[i];
//     }
         console.log(sum);
// }
// sum(10,20);
// sum(40,34,54);
// sum(0.5,7,60);  */

/** with rest operator */

function sum(name,...args){
    let sum=0;
    for(let i in args){
        sum += args[i];
    }
      console.log(`Hello ${name} your marks is ${sum}`);

}
var arr =[10,20,50];
console.log(arr);
console.log(...arr);
sum("amar",...arr);

// concate two arrays using spread operator

var arr1= [10,20,30,40];
var arr2= [60,70];
var arr3= [...arr1, ...arr2];  //if we change the sequance of spread operator then result will be change
console.log(arr3);


//spread op[erator using objects

var obj1 ={
    name:"Amar",
    course: "Btech"
};

var obj2 = {
    age:26
};

var obj3 = {...obj1, ...obj2};
console.log(obj3.name);