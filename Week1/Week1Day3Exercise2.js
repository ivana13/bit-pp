var a = 15;
//var a = 12;
//var a = "string"

if (typeof a === "number") {
    if (a % 3 === 0 && a % 5 === 0) {
        console.log(a);
    } else {
        console.log("X");
    }
} else {
    console.log("The value is not a number!");
}