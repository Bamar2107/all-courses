enum RESULT_TYPE{
    AS_NUMBER='as-number',
    AS_TEXT = 'as_text'
}

function addme(a:number|string, b:number|string, resultType:RESULT_TYPE)
{
   let result;
   if(typeof a=== 'number' && typeof b === 'number')
   {
       result = a+b;
   }
   else{
       result = a.toString()+ b.toString();
   }

   if(resultType == RESULT_TYPE.AS_NUMBER)
   {
       return +result;
   }
   else
   {
       return result.toString();
   }
}

console.log('Result as text is :'+ addme(1,5,RESULT_TYPE.AS_TEXT));
console.log('Result as number is :'+ addme(4,8,RESULT_TYPE.AS_NUMBER));

