"use strict"
var niz = [5, 7, 8, 9, 5, 5, 5, 5];
var x = 5;
var sum = 0;
function numArr(a, b) {
    for (var i = 0; i < niz.length; i++) {
        if (niz[i] === x) {
            sum += 1;
        }

    }
    return sum;
}
console.log(numArr(niz, x));