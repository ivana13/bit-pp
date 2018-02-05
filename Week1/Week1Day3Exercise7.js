//var a = "string";
var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (typeof a === "number" && typeof b === "number" && typeof c === "number" &&
    typeof d === "number" && typeof e === "number") {
    if (a > b && a > c && a > d && a > e) {
        console.log(a);
    } else if (b > a && b > c && b > d && b > e) {
        console.log(b);
    } else if (c > a && c > b && c > d && c > e) {
        console.log(c);
    } else if (d > a && d > b && d > c && d > e) {
        console.log(d);
    } else if (e > a && e > b && e > c && e > d) {
        console.log(e);
    }
} else {
    console.log("A value is not a number!");
}