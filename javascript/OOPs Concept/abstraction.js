//Hide the details & show the essential


function Circle(radius){
    this.radius=radius;
    let location = {X:1,Y:1};

    let optimumLocation= function(factor){
        return factor*100;

    }
    this.draw = function (){
        console.log(optimumLocation(0.1)+ " is the location of the circle");  
      console.log("then let's draw the circle.... ");
    }

}

let circle = new Circle(1);
circle.draw();