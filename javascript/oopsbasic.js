class welcome{
    welcomemessage(){
        console.log("Hi everyone Good Morning");
    }
    soory(){
        console.log("Sorry everyone, I am late.")
    }
}

let message= new welcome();
message.welcomemessage();
message.soory();

/**Constructor function 
 * 
 * in constructor function we donot need to call the function by default it will call when we created an object for the class
*/
class employee{
    constructor(){
        let drink;
        console.log("Hi amar wecole to console");
    }
    hello(){
        console.log(`Would you like to have some ${this.drink}`);
    }
}
let wish = new employee();
wish.drink="coffee";
wish.hello();