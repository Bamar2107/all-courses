//let sum = function(a){
  //  return function(b){
   //     return function(c){
     //       return a+b+c;
       // };
    //}
//}
//to simplyfy above code & not to write multiple return function for each new argument



//let sum = function(a){
  //  return function(b){
    //    if(b){
      //      return sum(a+b);
        //}
        //return a;
    //}
//}
let sum = a => b => b ? sum(a+b) : a;
console.log(sum(6)(7)(6)());