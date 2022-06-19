const car= ['audi','bmw','fiat'];
console.log(car);
console.log(car.length);
car.push('mahindra'); //here we can add more elements
console.log(car);
console.log(car.length);
car.push('mercedrs','suzuki','maruti')
console.log(car.length);
console.log(car);

//push() add element at thge end of the array but unshift() add begining at the array

car.unshift('aulto');
console.log(car);

//with numbers
const myNumbers=[1,2,3,6];
myNumbers.unshift(4,5);
console.log(myNumbers);
console.log(myNumbers.length);


//push() delete the last element of an array whereas shift() delete the first element of an array
myNumbers.pop();
console.log(myNumbers);
console.log(myNumbers.length);

//using slice method we can easily add,delete elemnts from any position of an array
//const months= ['january','march','april','june','july'];
//console.log(months);
//months.splice((months.length),0,'December');
// months.splice(5,0,'December');
/*console.log(months);
months.splice(3,1,'August');
console.log(months);
months.splice(2,0,'may');
console.log(months);*/



//update a month

const months= ['january','march','april','june','july'];
const indexOfmonth= months.indexOf('july');
if(indexOfmonth!=-1)
{
    months.splice(indexOfmonth,1,'JULY');
    console.log(months);
}else{
       console.log('Invalid Month for update')
}

