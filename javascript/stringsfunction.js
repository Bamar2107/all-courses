

var str= "Hi my name is Amar. What is your name";
console.log(str.length);
console.log(str.charCodeAt(7));
//console.log(str.charCodeAt(10));
//return unicode of laast character of ther above string

var lastChar= str.length-1;
console.log(str.charCodeAt(lastChar));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let st= 'Hello everyone';
//console.log(st.concat(" ",str));
console.log(`${st} ${str}`);