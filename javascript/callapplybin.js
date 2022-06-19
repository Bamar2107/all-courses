//call function is base on the function borrowing, that means we can borrow a function from other object & use it later
//in the program


//traitional way to print fullname

let name1 = {
    firstname: "Virat",
    lastname: "Kohli",
    fullname :function fullname(){
        console.log(this.firstname+" "+this.lastname);
    }
}
name1.fullname();


//using call function

let name2 = {
    firstname: "Amitabh",
    lastname : "Bachhan"
}

let name3 ={
    firstname: "Amar",
    lastname : "Babu"
}
let name4 ={
    firstname: "Ashok",
    lastname : "Babu"
}
let fullname = function(hometown,state) {
    console.log(this.firstname + " "+ this.lastname+" from "+hometown+","+state);
    
}

fullname.call(name2,"Mumbai","Maharastra");  //first agrument is always is the reference of the variable & second one is the arguments to pass

fullname.call(name3,"Bhawanipatna","Odisha");
fullname.apply(name4, ["Bhawanipatna","Odisha"]);  

//major difference between call & apply method is passing the arguments
//in call we send the arguments separately with comma separation but in case of apply method we pass it inside an array list




//bind method lookls exactly like call method, but the difference is bind method gives you the copy of the function which can be invoked later 
//but in case of call we dirtectly use it.
let name5 ={
    firstname: "Nirmala",
    lastname : "Babu"
}
let myfullname = fullname.bind(name5,"Narla","Odisha");
//console.log(myfullname);  it will gives us the function name so call it directly as a function

myfullname();