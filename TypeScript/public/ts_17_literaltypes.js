"use strict";
var RESULT_TYPE;
(function (RESULT_TYPE) {
    RESULT_TYPE["AS_NUMBER"] = "as-number";
    RESULT_TYPE["AS_TEXT"] = "as_text";
})(RESULT_TYPE || (RESULT_TYPE = {}));
function addme(a, b, resultType) {
    let result;
    if (typeof a === 'number' && typeof b === 'number') {
        result = a + b;
    }
    else {
        result = a.toString() + b.toString();
    }
    if (resultType == RESULT_TYPE.AS_NUMBER) {
        return +result;
    }
    else {
        return result.toString();
    }
}
console.log('Result as text is :' + addme(1, 5, RESULT_TYPE.AS_TEXT));
console.log('Result as number is :' + addme(4, 8, RESULT_TYPE.AS_NUMBER));
