
//casting is the type to override the type

let yourname:unknown = 'amarendra'
console.log((yourname as number)); //output will be amarendra but if we add any property like length then it will gives an error because
//number dosen't have length 


let b:any ='hello world'
console.log((b as string).length);


// using <> 
let c= 'India is my country';
console.log((<string>c));


//force casting
//first cast to the unknown type then to the target type
let d = 'Bhagbat Gita'
console.log((d as unknown) as string);
console.log(`Length of ${d} string is : ${((d as unknown) as string).length}`);

