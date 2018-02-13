"use strict"

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