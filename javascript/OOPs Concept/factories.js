/**if the object have more than one function we can say objects have behaviour just like human
 * 
 * object literals are the not the correct way to defining multiple function so that oop[s came into the picture
 */

/**Factory Function */

function createCircle(radius){

    return {
        radius,
        draw(){
            console.log("draw");
        }
    };
}
let circle = createCircle(1);
circle.draw();