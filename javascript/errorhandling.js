try{
console.log("Try start");
console.log("Try End");
}catch(error){
 console.log(error);
}

//try catch using settimeout

setTimeout(function(){
    try{
        bhagfshjd;
    }catch{
        console.log("Error has occured");
    }
},2000);


//catch block properties
try{
  a;
}catch(err){
   console.log(err.name);     //gives error type
   console.log(err.message);  // gives error message
   console.log(err.stack);    //gives full error message
}


//different types of erroe in javascript
//Eval Error
//RangeError
//ReferenceError
//SyntaxError
//TypeError
//URIError
//AggregateError

try{
    const demo=7;
    const demo =9;
}catch(error){
    if(error instanceof ReferenceError){
        console.log("ReferenceError");
    }else if(error instanceof TypeError){
        console.log("TypeError");
    }else if(error instanceof SyntaxError){
        console.log("SyntaxError");
    }else{
        console.log("Unknown Error");
    }
}