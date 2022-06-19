
function Circle(radius)
{
this.radius=radius;
this.draw = function(){
    console.log(`Draw Circle with radius 1`);
}
}
// console.log(Circle.constructor);

const circle = new Circle(1);

//internally js engine create an empty object using call function which is build in function of Object and pass 1 as its parameter
//Circle.call( {} , 1);   so this line exactly when we write new Circle(1)
// {} = refers to the this

//Circle.apply( {} , [1,2,3])  apply method is used when there is an array in your program


