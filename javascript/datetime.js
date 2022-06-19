let currDate =new Date();
console.log(currDate);
console.log(new Date().toLocaleString()); // give the local time
console.log(new Date().toString());

console.log(Date.now());  //retuns theb total milliseconds since 1st jan 1970


var d= new Date(2016,11,5,13,30,12,15); //months strats from 0 jan=0 upto Dec=11
console.log(d.toString());
console.log(currDate.toLocaleString());
console.log(currDate.getFullYear());
console.log(currDate.getMonth());
console.log(currDate.getDate());