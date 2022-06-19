let person ={
    name:"Amar",
    age:26,
    place:"bpt",
    degree:"btech"
};
let sperson ={...person};  //spread operator used in object

//console.log(person);
console.log(Object.values(sperson));