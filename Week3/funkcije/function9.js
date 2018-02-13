"use strict"
var suma = 0;

function odd(p) {
    for (var i = 0; i < p.length; i++) {
        if (p[i]%2 !== 0) {
           suma+=p[i];
        }
    }
    return suma;
}
console.log(odd([1, 3, 2, 4, 8, 7]));