// Promise function using setTimeout/

 function prom(complete){
     console.log(`Fetching the data, Please wait........`)
     return new Promise(function(resolve,reject){
     setTimeout( ()=>{
    
        if(complete){
            resolve("I am successful");
        }else{
            reject("I am Failed");
        }
     },5000);
   });
}

let onFulfillment =(result) =>{
 console.log(result);
}

let onRejectiuon =(err) =>{
   console.log(err);
 }

prom(true).then(onFulfillment).catch(onRejectiuon);   //this is called method chaining