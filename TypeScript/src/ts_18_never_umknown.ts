

function generateError(errormessage:string, code:number):never{
      throw {errormessage,code}
}

let output = generateError('Page Not Found', 500);
console.log(output);


function generate(message:string):void{
    console.log(message);
}
generate('Hi Amar');
