

//Inheritance in TS


class Parents{
    mynames:string='';
    setName(myName:string){
        this.mynames = myName;
    }
}

class Child extends Parents{
    getName():string{
        return this.mynames;
    }
}

let c1 = new Child();
c1.setName("Amar");
console.log(c1.getName());
