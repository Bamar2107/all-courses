// let name ={
//     firstname:"Amar",
//     lastname:"Babu"
// }

// let printName = function(){
//         console.log(this.firstname+" "+this.lastname);
// }

// let printmyName = printName.bind(name);
// printmyName();
//this is the traditional way of bind method


//lets create our own bind method

// let name ={
//     firstname:"Amar",
//     lastname:"Babu"
// }

// let printName = function(){
//         console.log(this.firstname+" "+this.lastname);
// }

// Function.prototype.myownbind = function(...args)
// {
//     let obj = this;   //here this refer to printName
//     return function()
//     {
//        obj.call(args[0]);
//     }
// }


// let printmyname = printName.myownbind(name);
// printmyname();

//what if there are more parameters in printName function so on that case we need to write apply() method
//same code of above written below

// let name ={
//     firstname:"Amar",
//     lastname:"Babu"
// }

// let printName = function(hometown){
//         console.log(this.firstname+" "+this.lastname+" "+hometown);
// }

// Function.prototype.myownbind = function(...args)
// {
//     let obj = this;   //here this refer to printName
//     let params = args.slice(1);
//     return function()
//     {
//        obj.apply(args[0],params);
//     }
// }


// let printmyname = printName.myownbind(name,"Bhawanipatna");
// printmyname();

//what is we need to pass another argument in printmyname() method
//solution is below


let name ={
    firstname:"Amar",
    lastname:"Babu"
}

let printName = function(hometown,state){
        console.log(this.firstname+" "+this.lastname+" "+hometown+" "+state);
}

Function.prototype.myownbind = function(...args)
{
    let obj = this;   //here this refer to printName
    let params = args.slice(1);
    return function(...args1)
    {
       obj.apply(args[0], [...params ,...args1]);
    }
}


let printmyname = printName.myownbind(name,"Bhawanipatna");
printmyname("Odisha");