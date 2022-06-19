function Sum(title:string){
    return function(constructor:Function){
        console.log(`Decorator Function`);
        
    }
}

@Sum(`Sum of Two number....`)
class Addtion{
    a=5;
    b=6;

    constructor(){
        console.log(`Sum is ${this.a + this.b}`);
        
    }
}

const addition = new Addtion();