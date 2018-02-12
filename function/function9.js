'use strict';

var a = [3, 4, 5, 6, 7];

function sum(niz) {
    var zbir = 0;
    for (var i = 0; i < niz.length; i++) {
        if (niz[i] % 2 !== 0) {
            zbir += niz[i];

        }
    }
    return zbir;
}

console.log(sum(a));