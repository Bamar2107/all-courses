function getValues(x:string | null | undefined) {
    return x!.toUpperCase();

    //return x.toUpperCase();
    //if we return above line then error will come that object is possibly null or undefined
}

console.log(getValues('i love my country india.'));
