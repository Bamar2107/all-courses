//function currying is a technique to evaluating function with multiple arguments, into sequence of function with single arguments

// function sum(a){
//     return function (b) {
//         return function(c){
//             console.log(a+b+c);
//         }
//     }
// }
//sum(5)(8)(3);

const sum= (a) => (b) => (c) => console.log(a+b+c);  //shorthand of above code, this is called function currying
sum(5)(8)(3);