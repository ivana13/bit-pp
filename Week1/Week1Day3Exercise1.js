//var a = "string";
var a = 10;

if (typeof a === "number") {
    if (a%2 === 0) {
        var b = a/2;
        console.log(a + " / 2 = " + b);
    } else {
        console.log("X");
    }
} else {
    console.log("The value is not a number!");
}