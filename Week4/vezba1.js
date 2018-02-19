"use strict"

function convert(number, base, newBase) {

    var newNumber = parseInt(number, base)
    var newwNumber = newNumber.toString(newBase)

    return newwNumber;
}
console.log(convert("ff",16,8));
