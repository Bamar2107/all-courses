//enum is a special class that represents constants (unchangeable variables)
//Enum comes into two flavors i.e, string & numeric

//Be default enums will initialized the first value to 0 then add 1 to each additional value


enum Directions{
    east,west,north,south
}

let myPosition = Directions.south;
console.log(myPosition);



//we can set default value or we can set all the values inside enum
enum Message{
    success=100, 
    failure=200,
    technicalfault 
}

let mymessage = Message.technicalfault;
console.log(mymessage);

enum Greet{
    hi = 'hi Amar',
    bye= 'Bye Amar'
}

let greetme = Greet.bye;
console.log(greetme);

