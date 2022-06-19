function Circle(radius){
    this.radius=radius;
    this.draw = function(){
        console.log("Lets draw a circle of radius of "+this.radius)
    }
}
const circle = new Circle(19);
circle.draw();


//to enumurate all the members in object using for-in loop
for(let key in circle){
    console.log(key);
}

//to get all the keys in object used Object.key the result will give you in array format

let keys= Object.keys(circle);
console.log(keys);

//to check the existance of a member in an object used 'in' operator
if('tangent' in circle){
    console.log(`Yes I am here....`)
}
else{
    console.log(`Sorry I am not here...`)
}