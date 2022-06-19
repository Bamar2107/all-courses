//custom define to an object using interface

interface user{
    name:string,
    age:number,
    married: any

    //married: any
    //here any is kind of data type which accepts any kind of data types, so in the users object we can set any data type values
    // likes strings, boolean, number as a value.
}
//if we change any data type inside interface then it will reflects on the objects values

let user:user = {
    name: "Amar",
    age: 30,
    married:'No'
}

//we can set 'any' on object level also without creating interface, this will also work & we can set any data types to object values

// let users:any = {
//     name: "Amar",
//     age: 30,
//     married:'No'
// }


//users.name= 300    this can't be done because name property have string typed
//we can't add new value to an object like  users.email = 'abc@gmail.com'
console.log(users);
