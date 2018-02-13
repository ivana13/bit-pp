
"use strict"
function digits(a) {
    var b = "";
    b = b + a;
    return b.length;

}
var c = digits(12345);
console.log(typeof c, c);

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


var resu = "";
var res = '';

function square(d, f) {
    for (var i = 0; i < d; i++) {
        resu += "*";
    }
    console.log(resu);

    for (var j = 0; j < f; j++) {
        res = '*\t' + "*";/*moze i da bude nov red: */
        console.log(res);
    }

    console.log(resu);
}

square(5, 3);


function chart(a, b, c) {
    var r = "";
    for (var i = 0; i < a; i++) {
        r += "*";
    }
    console.log(r);

    var f = ""; var m = 0;
    for (var m = 0; m < b; m++) {
        f += "*";
    }
    console.log(f);

    var ly = ""; var xy = 0;
    for (var xy = 0; xy < c; xy++) {
        ly += "*";
    }
    console.log(ly);

}
chart(7, 1, 8);

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


