function extractObject<T extends object,U extends keyof T>(a:T,b:U){
    return a[b];
}

const extractresult = extractObject({name:'Amar', age:26}, "name");
console.log(extractresult);
