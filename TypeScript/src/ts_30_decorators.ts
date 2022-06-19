//Decorators are extending feature of a class or we can say decorators are the function which call outside from a class.
//In simple words decorators are the piece of code wrapping inside a function.

//To create decorator, decorator itself accepts few agrumemnts to used as a decorators

//decorators executes top to bottom approach but function inside decorators are execute bottom to top approaches

function LogOne(title:string){
    return function(constructor:Function){
        console.log(`loggerOne function`);
    }
}

function LogTwo(title:string){
    return function(constructor:Function){
        console.log(`loggerTwo function`);
    }
}

@LogOne('Decorator Execution One........')
@LogTwo('Decorator Execution Two.........')
class Person{
    name='Amar';
    constructor(){
        console.log(`Objtect Creation through constructor`);
        console.log(`My Name is ${this.name}`);
    }
}

let man = new Person();

