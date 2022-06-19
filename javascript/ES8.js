//ES8 features

//string padding
//Object.value();
//Object.entries();

let a ="Amar".padStart(7);
console.log(a);  // it gives 3 extra space at start of the word & total it will count 7 

let b="January".padEnd(12);
console.log(b);  //it will add extra 5 space at the end


let bio = {
    name:"Amar",
    age:26,
    place:"bhpatna"
};
console.log(Object.values(bio));

let color = {
    favcolor: "blue",
    optcolor:"green",
    nicecolor:"olive green"
}
console.log(Object.entries(color));