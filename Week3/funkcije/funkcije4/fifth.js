"use strict"
var arr = [3, 11, -5, -3, 2];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum = sum + arr[i]
    }
}console.log(sum);
