function x(){
    for (let i=1;i<=5;i++)
    {   
        // if i write var i=1 here then it prints 5 times 6 as a output
        //we know let is block scope so for that reason everytime the setTimeout method is called the callback function forms a closure with new variable
        //itself, that means the copy of i in each iterartion is new
        setTimeout(() => {
            console.log(i);
        }, i*1000);
    }
}
x();