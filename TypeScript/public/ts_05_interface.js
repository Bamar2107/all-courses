"use strict";
//interface in TypeScript
let myuser = {
    name: 'anil',
    age: 30,
    address: "bhawanipatna",
    getName: function () {
        return `My name is ${myuser.name}`;
    }
};
console.log(myuser.getName());
