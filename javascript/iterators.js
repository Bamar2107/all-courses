
var x= ["apple","orange","kiwi","guava","pineapple","banana"];
var z = ["BBSR","PUNE","MUMBAI","BHPATNA","DHMH"];

let cities = z[Symbol.iterator]();
let destination= cities.next();
while(!destination.done){
      console.log(destination.value)
      destination= cities.next();
}

// for(let i=0;i<x.length;i++){
//     console.log(x[i]);
// }

//let y= x[Symbol.iterator]();
// console.log(typeof y);
// console.log(y);

//traditional way to get values
// y.next();
// console.log(y.next());
// console.log(y.next());
// console.log(y.next().value);
// console.log(y.next().value);
// console.log(y.next());

//using loop
//let result = y.next();    //stroe first value i.e apple
//while(!result.done){       //check until its true
  //  console.log(result.value);
    //result = y.next();    //assign next value just l;ike increment or decrement



const fullname ="Amaarendra";

let myname = fullname[Symbol.iterator]();

let myfullname = myname.next();

//using for of loop we can easily extract each character 

for(let char of fullname){
    console.log(char);
}


//while(!myfullname.done){
  //  console.log(myfullname.value);
    //myfullname= myname.next();

//}

