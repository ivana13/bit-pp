//var a = "string";
var a = 0;
var b = -1;
var c = 4;

if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    var q = "";
    if (a > b && a > c) {
        q = a;
    } else if (b > a && b > c) {
        q = b;
    } else if (c > a && c > b) {
        q = c;
    }
    var e = "";
    if (a < b && a < c) {
        e = a;
    } else if (b < a && b < c) {
        e = b;
    } else if (c < a && c < b) {
        e = c;
    }
    var w = "";
    if ((a > b && c > a) || (a < b && a > c)) {
        w = a;
    } else if ((b > a && a > c) || (b < a && b > c)) {
        w = b;
    } else if ((c > a && c < b) || (c < a && c > b)) {
        w = c;
    }
    console.log(q, w, e);
} else {
    console.log("A value is not a number!");
}