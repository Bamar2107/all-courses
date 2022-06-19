//interface in TypeScript

interface userType{
    name:string,
    age:number,
    address:string,
    getName:()=> string
}


let myuser:userType ={
    name:'anil',
    age:30,
    address:"bhawanipatna",
    getName: function(){
        return `My name is ${myuser.name}` 
    } 
}

console.log(myuser.getName());
