
let n= "name";

let obj = {
    ["student" + n] : "Amar",   //concate the student string value with name string from the above n variable
    course :"Btech",
    details: function(){
        return `Name of the Student is ${obj.studentname} & he is from ${obj.course} course`;
    }

};
console.log(obj.details());
console.log(obj.studentname);
