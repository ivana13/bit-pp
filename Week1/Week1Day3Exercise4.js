//var a = "string";
//var a = 4
var a = 8;
var b = 4;

if (typeof a === "number" && typeof b === "number") {
    if (a > b) {
        console.log(a);
    } else if (b > a) {
        console.log(b);
    } else if (a = b) {
        console.log("a is equal to b!");
    }
} else {
    console.log("a or b is not a number!");
}