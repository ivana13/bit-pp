
"use strict"
var sum = "";
function concaten(givenString, num) {
    if (typeof num === "undefined") {
        num = 1;
    }
    for (var i = 0; i < num; i++) {
        sum += givenString;
    } 
    return sum;
}
console.log(concaten("Ha"));
