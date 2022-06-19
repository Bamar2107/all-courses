//strict mode is useful for finding any syntax error in our program, and it tells the browser to look strictly in our program


function sum(a,b,b){
    console.log(a+b+b);
}
sum(10,20,30);
//above example gives us an erroe as answer is 70, this is why because b value is treated as 30 for both parameter
//also js engine did not give any duplicate parameter used error but if we use strict then it will give an error


"use strict";
num=8;
function add(c,c,d){
    console.log(c+c+d);
}
add(40,10,20);