//Destructuring in ES6 
//The destructuring assingment syntax is a javascript expression that make it possible to unpack values from arrays or properties from objects
//into distincts variables.

//Array destructuring
// const myBio = ['Amar', 'Babu', 26];

//traditional method to get values from an array
// let fname = myBio[0];
// let lname = myBio[1];
// let age = myBio[2];

//let[fname,lname,age] = myBio; //here position matters a lot
//console.log(fname);

// we can add value to it
// let[fname,lname,age, degree ="Btech"] = myBio;
// console.log(degree);

//we can destructure objects as well

const mybio = {
    name: "Amar",
    mlname:"Babu",
    mage: 26,
    mplace:"bhawanipatna"

}
let {name,mlname,mage,mplace } = mybio;
console.log(name);
//we have to specify same name from object creation name in the object destructuring  otherwise it will give us a undefined value

console.log(typeof setTimeout);