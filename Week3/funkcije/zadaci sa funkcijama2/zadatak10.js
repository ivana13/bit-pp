"use strict"

function getty(strB, numOfChar) {
    var newArr = [];
    for (var i = 0; i < numOfChar; i++) {
        newArr+= strB[i] ;
    }
    return newArr+"...";
}
console.log(getty("KyotoOsakaEdo", 5));

