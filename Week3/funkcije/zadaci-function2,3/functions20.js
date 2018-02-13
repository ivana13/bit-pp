"use strict"
/* Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

"My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string" -> "My-random-string" */

function convertSpaceIntodash(string, separator) {
    var newstring = "";
    separator = separator || "-"

    // if (!separator) {
    //     separator = "-";
    // }

    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            newstring += separator;
        } else {
            newstring += string[i];
        }
    }

    return newstring;
}

var output = convertSpaceIntodash("My random", "_")
console.log(typeof output);
console.log(output);




