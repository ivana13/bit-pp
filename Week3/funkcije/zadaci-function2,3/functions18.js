"use strict"
/*Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"] */

function convertStringintoArr(string) {
    var newArr = [];
    for (var i = 0; i < string.length; i++) {
        newArr[i] = string[i];
        if (newArr[i] === " ") {
            newArr[i] = null;
        }
    }
    return newArr;
}

console.log(convertStringintoArr("My array"));




