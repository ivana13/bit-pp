"use strict"
function get(strC, nChar) {
    var newArr=[];
    for (var i =0; i<strC.length; i++) {
        if (strC[i] === nChar) {
            newArr=strC[i]+ "...";

        }
    }
    return newArr;
}
console.log(get("Sekigahara", "a"));
