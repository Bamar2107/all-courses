
//let names:string[] =[];                       /**This will gives an error */
let names:any[] =[];

names.push('Amar');
names.push(1);
names.push(true);

console.log(names);


//union is used only in type script

function combine( a:number|string, b:number|string){
      let result;
      if(typeof a === 'number' && typeof b==='number')
      {
          result = a+b;
      }
      else
      {
          result = a.toString()+b.toString();
      }
      return result;
    }

let result = combine('Amar',5);
console.log(result);
