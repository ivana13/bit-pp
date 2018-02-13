"use strict"
function isNumPerfect(num) {
    var sum = 0;
    for (var x = 1; x < num; x++) {
        if (num % x === 0) {
            sum = sum + x;
        }
    } 
    if (sum === num) {
        var output = sum;
    }else {
        return num + " is not a perfect one, sorry!"
    }

    return output + " is a perfect number!"
}


var output = (isNumPerfect(28));
console.log(output);
