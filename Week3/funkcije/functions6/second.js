"use strict"
var arr1 = [1,2,3];
var arr2 = ["a","b","c"];

var arrOut = [];

for (var i = 0; i < arr1.length; i++) {
    arrOut[i*2] = arr1[i];
    arrOut[i*2+1]= arr2[i];
}
console.log(arrOut);