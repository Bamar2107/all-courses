"use strict";
function extractObject(a, b) {
    return a[b];
}
const extractresult = extractObject({ name: 'Amar', age: 26 }, "name");
console.log(extractresult);
