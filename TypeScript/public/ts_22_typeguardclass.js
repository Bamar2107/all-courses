"use strict";
class MyCar {
    driving() {
        console.log(`Driving car......`);
    }
}
class Truck {
    driving() {
        console.log(`Driving Truck...`);
    }
    loadingcargo(amount) {
        console.log(`Loading amount in truck is ${amount}`);
    }
}
function driveVechile(veh) {
    veh.driving();
    if (veh instanceof Truck) {
        veh.loadingcargo(30);
    }
    // if('loadingcargo' in veh){
    //     veh.loadingcargo(50)
    // }                           this way also we can typeguard in class using 'in' parameter
}
let vechileOne = new MyCar();
let vechileTwo = new Truck();
driveVechile(vechileOne);
driveVechile(vechileTwo);
