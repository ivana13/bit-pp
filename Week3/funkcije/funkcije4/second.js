"use strict"
var arr = [-3, 11, 5, 3.4, -8];
var outputArr=[] ;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        arr[i]=arr[i]*2;
    }
    outputArr[i] = arr[i];
}

console.log(outputArr);

