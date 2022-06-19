
//symbol in js are unique. if we compair two symbol then result will be false
let id= Symbol("Hello");
console.log(id);
console.log(id.description);
console.log(typeof id);



let age = Symbol("age");
let age1 = Symbol("age");

let user = {
    name: "Amar",
    edu : "Btech",
    [age] :25               //use of symbol inside an object
};

const a=12;
const b=12;
console.log(user[age]);
console.log(user.name);
console.log(age==age1);
console.log(a==b);