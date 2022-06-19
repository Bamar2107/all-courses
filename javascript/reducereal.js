const user =[
    {name:"Amar",gender:"Male",city:"BPT",age:26},
    {name:"Bikash",gender:"Male",city:"BPT",age:32},
    {name:"Prakash",gender:"Male",city:"BPT",age:26},
    {name:"Arti",gender:"FeMale",city:"BPT",age:32},
    {name:"Anshul",gender:"Male",city:"BPT",age:26},
    {name:"Maya",gender:"FeMale",city:"BPT",age:50},
];

const output = user.reduce(function(acc,curr){
       if(acc[curr.age]){
            acc[curr.age] = ++acc[curr.age];
       }else{
           acc[curr.age]=1;
       }
       return  acc;      
},{});

console.log(output);

const fname = user.filter( (x) => x.age>30).map((x) => x.name);
console.log(fname);

const firstname = user.reduce(function(acc,curr){
              if(curr.age>30){
                  acc.push(curr.name);
              }
              return acc;
},[]);
console.log(firstname);