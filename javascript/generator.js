//like iterator, generator is also gives us the control over the function


function *generateIt(){
 
     yield 'Yield 1';
     yield 'yield 2';
     yield 'yield 3';
     yield 'yield 4';

}
let g= generateIt();
for(let y of g){
    console.log(y);
}


function *generatenextnum(){
  let nm = 300;
  while(true){
      yield(nm++);
  }
}

let num = generatenextnum();
for(let value of num){
    if(value >310) break;
    console.log(value);
}

