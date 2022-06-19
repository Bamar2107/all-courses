//Object Optional Property in TS


//let car :{type:string,mileage:number} ={ type:"Audi"} this will gives us an error because mileage is declared outside, so for optional
//property we have to add question mark "?" to the property and then define type to the property.

let car :{type:string,mileage?:number} ={ type:"Audi"}

car.mileage =25

console.log(car);
