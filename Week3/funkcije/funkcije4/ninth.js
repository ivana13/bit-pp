"use strict"
var arr = [4, 6, 8, 2, 2];
var del = 2;
var newArr = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] != del) {
        newArr[i] = arr[i];
    }
}
console.log(newArr);
