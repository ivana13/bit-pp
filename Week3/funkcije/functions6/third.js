"use strict"

function replaceKelements(arr, k) {
    //var arr = [1, 2, 3, 4, 5, 6];
    //var k = 2;
    var newArr = [];
    for (var i = k; i < arr.length; i++) {
        newArr[i - k] = arr[i];
    }
    var l = newArr.length;
    for (var i = l; i < (l + k); i++) {
        newArr[i] = arr[i - l];
    }
    return newArr;
}

var result = replaceKelements([1,2,3,4,5,6],2);
console.log(result);
