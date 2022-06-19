class MyCar {
    driving(): void{
        console.log(`Driving car......`);
        
    }
}

class Truck {
    driving():void{
        console.log(`Driving Truck...`);
        
    }

    loadingcargo(amount:number){
        console.log(`Loading amount in truck is ${amount}`);
        
    }
}

type vechile = MyCar | Truck;

function driveVechile(veh:vechile){
    veh.driving();
     
    if(veh instanceof Truck) {
        veh.loadingcargo(30)
    }

    // if('loadingcargo' in veh){
    //     veh.loadingcargo(50)
    // }                           this way also we can typeguard in class using 'in' parameter
}

let vechileOne = new MyCar();
let vechileTwo = new Truck();

driveVechile(vechileOne);
driveVechile(vechileTwo);