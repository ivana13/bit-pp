"use strict"

//var num = 715172;
function num2arr(num) {
    var stringNum = "";
    var arr = [];
    stringNum = stringNum + num;
    //console.log(stringNum);

    for (var i = 0; i < stringNum.length; i++) {
        arr[i] = stringNum[i];
    }
    return arr;
}

var result = num2arr(715172);
console.log(result);
