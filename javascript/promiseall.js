/**if there are multiple promises and if we need to check all the promises then we have to write n number of resolve & reject functions
 * so for that promise.all() function came into the picture
 * 
 * if all of your promises are resolved then only then is called otherwise cathch is called
 */

let p1= new Promise( (resolve,reject) =>{
      setTimeout( () =>{
          console.log(`First promise has resolved`);
          resolve(10);

      }, 1*2000);
});


let p2= new Promise( (resolve,reject) =>{
    setTimeout( () =>{
        console.log(`Second promise has resolved`);
        resolve(20);

    }, 1*4000);
});


let p3= new Promise( (resolve,reject) =>{
    setTimeout( () =>{
        console.log(`Third promise has failed`);
        reject("Promise Failed");

    }, 1*6000);
});

let total=0;
Promise.all([p1,p2,p3]).then( (result) =>
{
    console.log(`Results are: ${result}`);
    for(let i in result)
    {
        total += result[i];
        console.log(`Sum of all the promises values is :${total}`)
    }
    })
    .catch( (error) =>
     {
         console.log(`Error :${error}`);
    });