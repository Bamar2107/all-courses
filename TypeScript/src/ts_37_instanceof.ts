function logValue(x: string | Date){
    if (x instanceof Date){
        console.log(x.toDateString());
        
    }else{
        console.log(x.toUpperCase());
        
    }
}

logValue(new Date());