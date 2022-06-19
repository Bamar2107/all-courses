console.log("start");
setTimeout(function callback(){
    console.log("Call back");
},5000);
console.log("End");


//first execution context is created and print start on the console 
//after that js engine recieve a setTimeout function & callback function callback(), so it stores this function inside the callback queue and set a timer of 5000 mili second on it & proceed further
//after that "End" will print on the console and execution context will pop up from the stack
//here event loop came into the picture
//event loop is like gate keeper for stack & callback queue it checks contineously on callback queue for is there anything to be execute & push it into the stack
//so after 5000 ms has expired event loop push the callback() function to stack from callback queue
//at last call back is print on the console and callback() function will pop up from the stack.

//java script run time environment has lot of things inside it like js engine, apis, event loop, callback queue, micro task queue etc.
