let user =["Amar",26,"banglore"];


let[name,age,city] = user;

console.log(name);
console.log(age);
console.log(city);

/**Nested Array */

let user1 =["Amar",26,"banglore",["male",34000]];
let[name1,age1,city1,[gender,salary]] = user1;

console.log(gender);
console.log(salary);

/**Using function */

function userDetails([name,age,city,salary]){
    console.log(name);
    console.log(age);
    console.log(city);
    console.log(salary);

}
userDetails(["Amarendra",27,"Pune",49000])

/**Function returing an array & later used it in a variable */


function employyeDetails(){
    return ["Rahul", 10001,"BBSR",50000];
}

let[ename,eid,ecity,esal]= employyeDetails();
console.log(ename);
console.log(eid);
console.log(ecity);
console.log(esal);



