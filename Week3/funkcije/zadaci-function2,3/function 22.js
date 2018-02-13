"use strict"
/*Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000] */

function convert(arrayOfStrings) {
    var newArr = [];
    var counter = 0;
    for (var i = 0; i < arrayOfStrings.length; i++) {
        if (typeof arrayOfStrings[i] === "string") {
            newArr[counter] = parseFloat(arrayOfStrings[i]);
            counter++;
        }
    }
    return newArr;
}

console.log(convert(["1", "21", undefined, "42", "1e+3", Infinity, "8"]));
