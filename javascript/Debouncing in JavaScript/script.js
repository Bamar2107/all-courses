
let counter=0;
let getData = () =>{
    console.log("Fetching Data.."+counter++) //this will return every key stroke count
}

const doSomeMagic = function(fn,delay){
      let timer;
    return function(){
        let contex =this,
            args = arguments;
            clearTimeout(timer);
          timer=  setTimeout( ()=>{
            getData.apply(contex,args);
            },delay)
    }
}

const betterFunction = doSomeMagic(getData,300);
