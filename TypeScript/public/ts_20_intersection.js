"use strict";
//interface Universal extends Basic, Update {}
//Above we can change type to interface also, interface works as same as type, difference between them is below. 
let employee = {
    name: 'Amar',
    age: 26,
    roles: ['UI developer', 'FrontEnd'],
    address: ['Bhawanipatna', 'Odisha'],
    pincode: 766001
};
console.log(`employee name is ${employee.name} and he is from ${employee.address[0]}`);
// so if we decalre a number or boolean value then it will throe an error.
let num = 'Amar';
