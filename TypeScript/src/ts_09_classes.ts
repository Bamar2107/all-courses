//Classes in TS

class App{

   private name:string;

   public constructor(myname:string){
            this.name = myname;
    }

    public getName():string{
        return this.name
    }
}

let a = new App("Hi Amar");
console.log(a.getName());
