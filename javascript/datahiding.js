
// var counter=0;
// function increment(){
//     counter++;
// }

//from above code anyone can easily access the counter variable in this program 
//so for darta hiding or encapsulation clopsure comes into the picture



function incrementCounter(){
var counter=0;
return function increment(){
    counter++;
    console.log(counter);
}
}
 incrementCounter()();

//so here nobody can access the counter variable in this program or we can say counter variable is just like a private variable inside the 
//increment() function. It is the good practice to code like from line 12 to 20.

