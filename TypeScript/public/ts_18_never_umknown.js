"use strict";
function generateError(errormessage, code) {
    throw { errormessage, code };
}
let output = generateError('Page Not Found', 500);
console.log(output);
function generate(message) {
    console.log(message);
}
generate('Hi Amar');
