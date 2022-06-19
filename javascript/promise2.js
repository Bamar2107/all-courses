

function prom(a,b)
{
console.log(`Please wait for some time`);

return new Promise(function(resolve,reject){
       setTimeout( ()=>{
           var c= a/b;
           if(a,b){
               resolve(`Your answer is ${c}`)
           }else{
               reject(`Failed to calculate`);
           }
       },3000);
    });
}
prom(38,0).then((result) => {console.log(result)}).catch((error) => {console.log(error)}); //we can directly call function inside then & catch functions