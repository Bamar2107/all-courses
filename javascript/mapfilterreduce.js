//map function

const arr= [3,6,7,8,9,11,12,16,17,19,20,43];
console.log(Math.min(...arr));   //gives minimum element
console.log(Math.max(...arr));    //gives maximum element
console.log(...arr);

const double= function(x){
        return x*2;
}
const triple= function(x){
  return  x*3;
}
const binary= function(x){
    return   x.toString(2);
}

const cities =["BPT","BBSR","MUMBAI","PUNE","HYD"];
console.log(...cities);                //spread operator extract ecah element as distinct values

//console.log(arr.map(double));
//console.log(arr.map(triple));
//console.log(arr.map(binary));


//filter odd numbers
function isOdd(x){
    return x%2;
}
const odd= arr.filter(isOdd);
//console.log(odd);

//filter even number

function isEven(x){
    return x%2===0;
}
const even = arr.filter(isEven);
//console.log(even);

//filter greater than 15

const greater = arr.filter( (x) => x<10);
//console.log(greater);

//reduce non functional way to find sum of all elements

function sumofall(arr){
    let sum=0;
    for(let i in arr){
        sum= sum + arr[i];
    }
    return sum;
}
//console.log(sumofall(arr));

//reduce in functional way

const output = arr.reduce(function(acc,curr){
    acc = acc+curr;
    return acc;
});
//console.log(output);

//find maxmimum value from array

function maximumnumber(arr){
    let max=0;
    for(let i in arr){
        if(arr[i]>max){
           max = arr[i];
        }
    }
    return max;
}
//console.log(`Maximum number of the array is :${maximumnumber(arr)}`);


const maxoutput = arr.reduce(function(max,curr){
         if(curr>max){
             max = curr;
         }
         return max;
},0);

//console.log(maxoutput);
