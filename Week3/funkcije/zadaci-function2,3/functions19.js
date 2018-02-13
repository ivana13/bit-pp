"use strict"
//Write a function that accepts a number as a parameter and checks if the number is prime or not. 
//Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function primeNumCheck(num) {
    if (typeof num === "number") {

        if (num === 1) {
            return false;
        }
        else if (num === 2) {
            return true;
        } else {
            for (var x = 2; x < num; x++) {
                if (num % x === 0) {
                    return false;
                }
            }
            return true;
        }
    }
}
console.log(primeNumCheck(46));
