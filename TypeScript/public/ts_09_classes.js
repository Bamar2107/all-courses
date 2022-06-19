"use strict";
//Classes in TS
class App {
    constructor(myname) {
        this.name = myname;
    }
    getName() {
        return this.name;
    }
}
let a = new App("Hi Amar");
console.log(a.getName());
