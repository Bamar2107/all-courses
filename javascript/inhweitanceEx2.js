class Employee{
    constructor(name,age,salary){
        this.empname=name;
        this.empage=age;
        this.empsal=salary;
        
    }
    info(){
        console.log(`Employee Class Called`)
        console.log(`${this.empname} ${this.empage} ${this.empsal}`);
    }
}

class Manager extends Employee{
    info(){
        let ta=3000;
        let pa= 1000;
        let totalsal= this.empsal+ta+pa;
        console.log(`Manager class Called`)
        console.log(`${this.empname} ${this.empage} ${totalsal}`);
    }
}

let a = new Employee("Amar",26,50000);
let b = new Manager("anshul",29,48000);
a.info();
b.info();