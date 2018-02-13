"use strict"
//Write a function to find the position of the first occurrence of a character in a string. 
//The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.

function findFirstOccurence(word, letter) {
    for (var i = 0; i < word.length; i++) {
        var letterInWord = word[i];
        if (letterInWord === letter) {
            return i + 1;
        }
    }
    return -1;
}
console.log(findFirstOccurence("Milica", "k"));