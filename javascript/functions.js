//function statement
function a(){
    console.log("a is called");
}
a();

//function expression
var b= function(){
    console.log("b is called");
}
b();

//the major difference between function statement & expression is hoisting
//if we declare a() & b() at the top of the program then 
//a gives result where as b gives us an error called type error


//function declarartion is the same like function statement there is nothing in difference


//Named function expression
var c= function abc(){
    console.log("c is called");
}
c();

//first class function
//the ability to use functions as values is known as first class function 
//or we can say the ability to use function as a value & pass it as a argument and returned to another function 
//this abulity is called first calss function


let myname = function (param1)
{
    return function myfullname(){
    }
}
console.log(myname);


//call back function

setTimeout(() => {
    console.log("Javascript")
}, 5000);

function x(y){
    console.log("x is called");
    y();

}

x(function y(){
    console.log("y called")
})
//javascript is a synchronous & single threaded language
