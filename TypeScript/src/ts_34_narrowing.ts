

function combineStringOrNumber(count: number | string, input:string):string
{
    if(typeof count === 'number'){
        return ' '.repeat(count)+input;
    }else{
        return count+input;
    }
}

console.log(combineStringOrNumber('7', ' is my favorite number'));
console.log(combineStringOrNumber(7, ' is my favorite number'));
