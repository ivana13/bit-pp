function pad(num, num2, side) {
    if (side === "r") {
       var left= num.padStart(num2.length,num2)
    } else {

        var left = num2.padStart(num.length,num)
    }
    return left;
}
console.log(pad("3333","100",""));
