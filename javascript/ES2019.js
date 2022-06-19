//array flat() method

let a= [
    ['zone1', 'zone2'],
    ['zone3', 'zone4'],
    ['zone5','zone6']
];
console.log(a.flat()); 
//by default flat() method reduce only one level of an array 
//if you want to flat an array upto any level then give an value 'Infinity' to flat() method

let b = [
    ['zone1', 'zone2'],
    ['zone3', 'zone4'],
    ['zone5','zone6',[
        'zone7','zone8'
    ]]
];
console.log(b.flat(2)); //we can pass the level number to the flat method to flatten the array

//suppose there are n number of level of array then simply use infinity

let c = [
    ['zone1', 'zone2'],
    ['zone3', 'zone4'],
    ['zone5','zone6',[
        ['zone1', 'zone2'],
        ['zone3', 'zone4'],
        ['zone5','zone6']
    ,[
        ['zone1', 'zone2'],
        ['zone3', 'zone4'],
        ['zone5','zone6']
    ]]]
];
console.log(c.flat(Infinity));


//Object.fromEntries method convert array to object once again

let color = {
    favcolor: "blue",
    optcolor:"green",
    nicecolor:"olive green"
}
let arrObj =Object.entries(color); //this gives an array
console.log(arrObj);

console.log(Object.fromEntries(arrObj)); //this returns object 