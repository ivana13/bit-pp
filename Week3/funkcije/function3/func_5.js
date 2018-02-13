"use strict"
function cutArr(arr, n) {
    var newArr = [];
    for (var i = n; i < arr.length; i++) {
        newArr[i] = arr[i];
    }
    return(newArr);
}

var output=(cutArr([7,9,0,-2],2));
console.log(output);
