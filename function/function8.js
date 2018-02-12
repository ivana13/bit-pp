'use strict';

var a = [1, 525, 5, 535, 23, 5];
var x = 5;

function noa(broj, niz) {

    var brojac = 0;

    for (x = 0; x < a.length; x++) {
        if (niz[x] === broj) {
            brojac++;
        }
    } return brojac;
}
console.log(noa(x,a));