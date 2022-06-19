//***************************Set Interval()********************************** */
// function add(){
//     let sum = (Math.floor(Math.random()*100))+(Math.floor(Math.random()*100));
//     console.log(sum);
// }
// add();
// setInterval(add,2000);


//every() method of array

const arr= [12,65,25,3,8,14,17,26,24,23,56,54];

let isOver18= arr.every((value)=>{
  return value>18;
})
console.log(`Every element of the array is above 18: ${isOver18}`);