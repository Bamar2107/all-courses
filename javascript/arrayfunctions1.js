const nums1= [1,5,7,19,13,20,23,30,44,50,56]
//check numbers greater than 25

let num2 = nums1.map((curElem,indfex,arr)=>{
          return curElem>25;
})
console.log(nums1);
//console.log(num2);

let num3 = nums1.map( (curr, index, arr)=> {
       return ` index number ${index} and the value ${curr} is belongs to ${arr} array`;
    })
console.log(num3);