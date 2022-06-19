//what is this object 

// this contains the current context and this can have different values based upon the where it is placed

//example 1
// console.log(this);
//here this refer to the current context that is winow global object


//example 2
// function myName()
// {
//     console.log(this);
// }
// myName();
//here also this refers to the window global object


//example 3
// var a= "amar";
// function fullnames(){
//     console.log(this.a);
// }
// fullnames();

//example 4

// const bio ={
//     myname: "Amar",
//     myPlace(){
//         console.log(this.my);
//     },
//     myAge: 30
// }
// bio.myPlace(); here this refers to the object called bio and not to the window global object

// const bio ={
//         myname: "Amar",
//         myPlace: () => {
//             console.log(this.myname);
//         },
//         myAge: 30
//     }
//     bio.myPlace();
    //so here using fat arrow function this is not refers to the objectr called bio it refers to the window object

    //example 5

    let bioData = {
         myName : {
             firstname: "Amar",
             lastname:"Babu"
         },
         myage : 26,
         myplace: "bhawanipatna",
         getBio(){
             console.log(`Hi my name is ${this.myName.firstname} and i'm ${this.myage} years old.`)
         }

    }
    bioData.getBio();