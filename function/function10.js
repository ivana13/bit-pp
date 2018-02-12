'use strict';

function howManyLetters(word, letter) {
    var sum = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter || word[i] === letter.toUpperCase()) {
            sum += 1;
        }
    }
    return sum;
}

console.log(howManyLetters("ivaAna", "a"));
