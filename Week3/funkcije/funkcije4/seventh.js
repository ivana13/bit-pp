"use strict"
var arr1 = [4, 5, 6, 2];
var arr2 = [3, 8, 9, 11];

var arrOut = [];

for (var i = 0; i < arr1.length; i++) {
    arrOut[i*2] = arr1[i];
    arrOut[i*2+1]= arr2[i];
}
console.log(arrOut);
