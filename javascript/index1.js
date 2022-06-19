console.log('Hi world');
//priting a simple text in console

//adding two number using var
var a=5,b=10;
console.log(a+b);


//table using for loop
let tableOf = 8;
for(var i=0;i<=10;i++){
    console.log(`${tableOf} * ${i} =${tableOf * i}`); //used string temlate
}

//check year is leap year or not
let year= 2020;
if(year%4==0)
{
    if(year%100==0)
    {
        if(year%400==0)
        {
        console.log(`${year} is a leap year`)
    }else console.log(`${year} is not leap year`)
}}else console.log(`Enter valid year is leap year`)
