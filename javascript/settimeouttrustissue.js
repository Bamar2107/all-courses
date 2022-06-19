//set time out is not exactly behaves what it looks like


console.log("start");
setTimeout(function callback(){
    console.log("Call back");
},5000);
console.log("End");


let startDate = new Date().getTime();
let endDate= startDate;

while(endDate < startDate+10000){
        endDate= new Date().getTime();
}

console.log("While finished...");