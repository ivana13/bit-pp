"use strict"
function finder(string, char) {
    for (var i = string.length; i > 0; i--) {
        if (string[i] === char) {
            return i + 1;
        }
    }
    return -1;
}

console.log(finder("Mononoke", "n"));

