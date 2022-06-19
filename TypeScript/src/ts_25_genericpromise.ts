//generic supported only in type script, not by vanilla javascript

let mypromise:Promise<string> = new Promise( (resolve, reject) =>{
    setTimeout( () =>{
         resolve('Some Demo text');
    },2000);
});

mypromise.then( data => {
    console.log(data.split(''));
    console.log(data.length);
    
    ;
}).catch( error =>{
    console.log(error); 
})