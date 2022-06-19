class Employee{
    constructor(name){
        console.log("Hello Employee " + name);
    }
}

class Manager extends Employee{
    constructor(){
        super("Amar");
        console.log("Manager called you for your promotion");
    }
}

let a = new Manager();