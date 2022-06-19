let username = '';
let userdata = username || 'DEFAULT';
console.log(userdata);

let myfullname ='Amar';
let printname = myfullname ?? 'DEFAULT';
console.log(printname);


//difference between || and ?? is in || if we specified null, undefined or set to empty it will print DEFAULT, but in case of ??
//if we set to empty it will print nothing.