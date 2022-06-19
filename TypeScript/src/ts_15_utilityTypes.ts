//partial changes all the properties in an object to be optional
interface Points{
    x:number;
    y:string;
}

let positions: Partial <Points> ={};
positions.x = 10;
positions.y="20";
console.log(positions);

//Required changes all the properties to be required
interface Car {
    model:string;
    color:string;
    price:number;
    launch:number;
    mileage:number;
}

let myCar :Required <Car> ={
    model:"Ford",
    color:'Black',
    price:400000,
    launch:2020,
    mileage:29,
}
console.log(myCar);

//Record is a shotcut to defining an object type with specific key type & value type

let users : Record <number,string> ={
    1:'Anil',
    2:'Amar',
    3:'Ashok',
    4:'Nirmala'
}
console.log(users);

//Omit removes keys from an object type
interface Person {
    name:string;
    age:number;
    location:number|string;
}

const getUser:Omit<Person, 'location'> ={
    name:'Amar',
    age:36
}
console.log(getUser);


//Pick removes all but the specified keys from an object type

interface House{
    color:string;
    height:number;
    width:number;
    buildYear:number;
    location:number|string;
    country:string;
    zipcode:number
}

let myHouse: Pick<House, 'color'> ={
    color:'White'
}
console.log(`My house color is ${myHouse.color}`);


//Excludes removes types from an union

type Primitive = string|number|boolean;
const data:Exclude<Primitive, string> = true;
console.log(typeof data);

//ReturnType extracts the return type of a function type

type getYear = () =>{
    year:number;
    month:number;
}

const year:ReturnType<getYear> ={
         year:2022,
         month:4
}
console.log(year);

//Parameter extracts the parameter types of a function type as an array