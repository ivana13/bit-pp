var a = 52;

if (typeof a === "number") {
    if (a / 10 >= 1 && a / 10 < 10) {
        var digit = a % 10;
        var result = "";
        result += digit;
        digit = (a - digit) / 10;
        result += digit;
        console.log(result);
    } else {
        console.log("The number does not have two digits! ")
    }
} else {
    console.log("ERROR!");
}