enum Roles {
    author='writer',
    admin ='Admin',
    guest = 'Guest'

}

const person ={
    name:'Amar',
    age:30,
    salary:69000,
    role:Roles.author
}

if(person.role === 'writer'){
    console.log(`${person.name} is a ${person.role}`);
    
}

// const mynames = ['Amar','anil','ashok', 'nirmala'];
//  mynames.forEach( (names:string) =>{
//     console.log(names.toUpperCase());
// })

function getfirstThree(x: number[] | string){
    return x.slice(0,3);
}
console.log(getfirstThree('Amarendra'));
