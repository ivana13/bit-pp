"use strict"
var num = 12345;
function reverseDigits(num) {
    var lastDigit = num % 10;
    var numString = "";
    while (num >= 1) {
        lastDigit = num % 10;
        numString=numString+lastDigit;
        num=(num-lastDigit)/10;
    }
    parseFloat(numString);
    return (numString);
}
var output=(reverseDigits(12345));
console.log(output);
