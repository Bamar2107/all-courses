"use strict";
//Inheritance in TS
class Parents {
    constructor() {
        this.mynames = '';
    }
    setName(myName) {
        this.mynames = myName;
    }
}
class Child extends Parents {
    getName() {
        return this.mynames;
    }
}
let c1 = new Child();
c1.setName("Amar");
console.log(c1.getName());
