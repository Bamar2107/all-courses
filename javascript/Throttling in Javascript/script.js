const mainbody = document.getElementById("main-div");
let timer;

function makeAPICall(){
    const debounc = document.getElementById("debounc-count");
    const debouncCount = debounc.innerHTML || 0;
    debounc.innerHTML = parseInt(debouncCount) +1;
    
}

const throttleFunction = function(fun, delay){
   if(timer){
       return 
   }
   timer = setTimeout( ()=>{
       fun();
       timer = undefined;
   },delay)
}

mainbody.addEventListener("scroll", function(){
    let apiCallCountDom = document.getElementById("show-api-call-count");
    let apicallCount = apiCallCountDom.innerHTML || 0;
    apicallCount = parseInt(apicallCount)+1;

    //update the number of times makeAPICall method is called
    apiCallCountDom.innerHTML = apicallCount;

    //Throttles makeAPICall methods such a way that it will executes in every 200 milliseconds

    throttleFunction(makeAPICall,200);

})