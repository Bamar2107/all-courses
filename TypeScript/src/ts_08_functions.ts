//Functions in TS


function clac(z:number,b:number):number
{
    return z*b;
}


//we can set type to function parameters
function add(c:number,d:number){
    return c+d;
}

//function with optional parameter
function sub(e:number, f?:number){
    return f?e-f:e;
}

console.log(clac(2,5));
console.log(add(4,8));
console.log(sub(100));


//default parameter
function expo(first:number, second:number=3){
    return first**second;
}

console.log(expo(2));


//Void return type. void returns nothing

function greet():void{
    console.log(`Hello everyone....`);
    
}
greet();


//rest parameter
//Rest parameter can be typed normal parameters, but the typed be an array as rest parameters are always array


function sum(x:number, y:number, ...rest:number[]){
    return x+y+rest.reduce( (p,c) => p+c, 0)
}

console.log(sum(10,10,10,10,10,10,10,10));
