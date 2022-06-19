let counter =0;
const getData = ()=>{
    console.log("fetching Data....."+counter++);
}


const debounce = function(fn,delay){
    let timer;
    return function(){
        let context =this, 
            args= arguments;
            if(!timer){
                getData.apply(context,args);
            }
            clearTimeout(timer);
          timer =setTimeout( ()=>{
               timer = undefined;
          },delay)
    }
}
const mydebounce = debounce(getData,300);