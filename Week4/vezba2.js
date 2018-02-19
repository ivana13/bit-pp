"use strict"

function reverses(number) {
    var newNumber = number + ""

  return newNumber.split("").reverse().join("");
}
console.log(reverses(12345678));
