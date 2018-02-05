//var a = "string";
//var a = -3
var a = 3;
var b = -7;
var c = 2;

if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    if (a * b * c < 0) {
        console.log("The sign is -");
    } else {
        console.log("The sign is +");
    }
} else {
    console.log("A value is not a number!");
}