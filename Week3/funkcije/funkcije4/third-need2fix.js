"use strict"
var arr = [4, 2, 2, -1, 6];

for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            console.log(i);
        }
    }
}