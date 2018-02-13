//var  arr =[NaN, 0,15,false,-22,undefined,47,null,Infinity];

"use strict"
function filteroutFalsy(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (!!arr[i] === true) {
            newArr[i] = arr[i];
        }
    }
    return newArr;
}


var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var output;
output = filteroutFalsy(arr);
console.log(output);
