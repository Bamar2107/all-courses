//A tuple is a typed array, with a pre-defined length and types for each index.


let mytuples:[number,string,boolean] = [7,"Amar", true];

//above we can change the order otherwise erroe will be thrown 
console.log(mytuples);


let items: readonly[string,number,boolean] = ['Anil', 23,true];


//items.push(34); if we push new item then it will add to the array. so to prevent this use readonly.
console.log(items);




//since tuples are array then we can destructured it

const graph:[number,number] = [33.35,89.23];

const [x,y] = graph;
console.log(`X position : ${x} , Y position : ${y}`);
