'use strict';
function countVowels(str) {
    var numVow = 0;
    for (var i=0; i<=str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i]=== 'u') {
            numVow ++; 
        }
    }
    return numVow;
}

console.log(countVowels('amamaa'));

