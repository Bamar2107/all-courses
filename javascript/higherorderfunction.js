//function x(){                 //here x is the call back function
  //  console.log("Namaste");
//}
//function y(x){  //here y is the higher order function
  //  x();
//}

const radius = [2,3,4,6];

const area= function(rad){
    return Math.PI*rad*rad;
}
const circumference= function(rad){
    return 2*Math.PI*rad;
}

const diameter = function(rad){
    return 2*rad;
}


const calculate= function(radius,logic) //higher order function
{
    const output =[];
    for(let i in radius){
        output.push(logic(radius[i]));
    }
      return output;

};


console.log(calculate(radius,area));
console.log(radius.map(area));
//console.log(calculate(radius,circumference));
//console.log(calculate(radius,diameter));