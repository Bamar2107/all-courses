"use strict";
//enum is a special class that represents constants (unchangeable variables)
//Enum comes into two flavors i.e, string & numeric
//Be default enums will initialized the first value to 0 then add 1 to each additional value
var Directions;
(function (Directions) {
    Directions[Directions["east"] = 0] = "east";
    Directions[Directions["west"] = 1] = "west";
    Directions[Directions["north"] = 2] = "north";
    Directions[Directions["south"] = 3] = "south";
})(Directions || (Directions = {}));
let myPosition = Directions.south;
console.log(myPosition);
//we can set default value or we can set all the values inside enum
var Message;
(function (Message) {
    Message[Message["success"] = 100] = "success";
    Message[Message["failure"] = 200] = "failure";
    Message[Message["technicalfault"] = 201] = "technicalfault";
})(Message || (Message = {}));
let mymessage = Message.technicalfault;
console.log(mymessage);
var Greet;
(function (Greet) {
    Greet["hi"] = "hi Amar";
    Greet["bye"] = "Bye Amar";
})(Greet || (Greet = {}));
let greetme = Greet.bye;
console.log(greetme);
