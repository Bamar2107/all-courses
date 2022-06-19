
//we can use duynamic object properties

let myname="amar";

const mybio ={
    [myname]: "hello how are you ?",  //using sqaure bracket we can use dynamic value
     [26] : "my age"  //here we can use mathemetical operations also like [20+6]
}
console.log(mybio);

//if key & value are same then no need to write the both key & value

let a="bbsr";
let b="mumbai";

//actual code
//const cities ={
   //  a :a,
   // b:b
//}
const cities ={a,b};  //here i am not wriring the above actual code
console.log(cities);

