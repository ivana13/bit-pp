"use strict"

function copycat(numCopies, elArr) {
    var newARR = [];
    for (var i = 0; i < numCopies; i++) {
        newARR[i]=elArr;
    }
    return newARR;
}
var output= (copycat(6,"Laki i Paki"));
console.log(output);

