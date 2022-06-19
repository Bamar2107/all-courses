type Basic  = {
    name:string,
    age:number,
    roles: string[]
}
// interface Basic {
//     name:string,
//     age:number,
//     roles: string[]
// }

type Update = {
    address : string[];
    name:string,
    pincode: number
}

// interface Update {
//     address : string[];
//     name:string,
//     pincode: number
// }


//This is called intersection type where is is the combination of two objects type & we have to declare all tyhe properties in Universal Type
type Universal = Basic & Update ;


//interface Universal extends Basic, Update {}


//Above we can change type to interface also, interface works as same as type, difference between them is below. 

let employee:Universal ={
    name:'Amar',
    age:26,
    roles : ['UI developer', 'FrontEnd'],
    address : ['Bhawanipatna', 'Odisha'],
    pincode: 766001
}

console.log(`employee name is ${employee.name} and he is from ${employee.address[0]}`);

//interface defines the type of an object where as types defines the structure of a variable.


type One = string | number;
type Two = boolean | string;

type Combine = One & Two;  //here Combine is now a string type why because intersection only takes common types between two variable
// so if we decalre a number or boolean value then it will throe an error.

let num:Combine = 'Amar';
