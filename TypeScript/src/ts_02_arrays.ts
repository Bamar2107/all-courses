let mydata=['Amar','anil','ashok','Munna',10]
mydata.push('Nirmala');
mydata.push(100)
//data.push(true)           here this will give us an error because boolean value is not present in the array before
console.log(mydata);



//mixed type value can be pushed but the typed data must be present before, means if we want to pass a numeric data then a numeric data
//must be present in the array before otherwise tsc gives us an error. 


// if we want to define a type for an array then syntax will be
//let data:string[] = ['Amar','anil','ashok','Munna']  


//let data:string = ['Amar','anil','ashok','Munna']  will give you an error becuase it is not claarified that strings values are array
                                                //or not



