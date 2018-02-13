"use strict"
var arr1 = [4, 5, 6, 2];
var arr2 = [3, 8, 9, 11];

var arrOut = [];
arrOut=arr1;
var n =arr2.length;

for (var i=0; i<n; i++){
    arrOut[i+n]=arr2[i];
}
console.log(arrOut);
