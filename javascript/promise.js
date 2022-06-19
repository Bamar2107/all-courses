//promise()  function
/**basically it5 has 3 stages
 * 1.resolve
 * 2.pending
 * 3.reject
 */

function prom(complete){
     return new Promise(function(resolve,reject){
    if(complete){
        resolve("I am successful");
    }else{
        reject("I am Failed");
    }
});
}

let onFulfillment =(result) =>{
  console.log(result);
}

let onRejectiuon =(err) =>{
    console.log(err);
  }

prom(true).then(onFulfillment);
prom(true).catch(onRejectiuon);