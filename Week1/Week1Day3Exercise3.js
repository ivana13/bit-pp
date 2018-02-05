var a = 4;
//var a = 9;
//var a = "string";

if (typeof a === "number") {
    if (a % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
} else {
    console.log("The value is not a number!");
}