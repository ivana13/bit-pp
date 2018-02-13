"use strict"
var arr = [2, 4, -2, 7, -2, 4, 2];
var n;
if (arr.length % 2 === 0) {
    n = arr.length / 2;
} else {
    n = (arr.length - 1) / 2;
}
console.log(n);


for (var i = 0; i < n; i++) {
    var j = arr.length - 1 - i;
    if (arr[i] !== arr[j]) {
        console.log("false");
    } 
    console.log("true");
    }  
