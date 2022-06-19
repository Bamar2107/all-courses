/** naming convection of Constructor function in JS is start with a Uppercase */


function Circle(radius)
{
this.radius=radius;
this.draw = function(){
    console.log(`Draw Circle with radius 1`);
}
}
const circle = new Circle(1);
circle.draw();

/**There are 2 ways to creating function
 * 
 * 1. Factories Function
 * 2. Constructor Function
 */