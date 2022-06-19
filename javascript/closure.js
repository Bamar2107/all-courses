
function a()
{
    var x=7;  
    function b(){
        console.log(x);
    }
    //var x=100;   if i wite this here then output will be 100 this is why because before calling function b()
    // the reference value of x became 100 & it stored in the local memory so insted of 7 it prints 100

    b();
   
}
a();
//closure means a function with its lexical enviourment bound together is called closure
//here x is outside od function b() & function b() lexical enviourment is function a()
//so b() & x is whole together is called closure


//Below is the actual closure of above codw

// {
//     var x=7;
//     function b(){
//         console.log(x);
//     }
//     b();

// }



//uses of closure

// 1. module design pattern
// 2. currying
// 3. functions like once
// 4. memoize
// 5. maintaing state in async world
// 6. setTimeout
// 7. Iterators & many more