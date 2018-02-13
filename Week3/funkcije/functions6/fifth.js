"use strict"
function multiply(m) {

    var product = "\n";
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= m; j++) {
            product = product + (i * j) + " ";
        }
        product += '\n'
    }
    return product;
}

var result = multiply(12);
console.log(result);
