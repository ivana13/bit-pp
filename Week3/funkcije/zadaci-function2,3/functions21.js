"use strict"
// Write a function to get the first n characters and add “...” at the end of newly created string.

function addDots(string, n) {
    var newString = "";
    // for (var i=0; i<string.length; i++){
    for ( var i = 0; i < n; i++) {
        newString += string[i];
    }
    return newString + "...";
}
console.log(addDots("Gdslfsvs", 4));
