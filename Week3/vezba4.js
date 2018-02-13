'use strict'
var x = 1234;
var y = "";
var n = [];

y += x;
for (var i = 0; i < y.length; i++) {
    n[i] = y[i];
    n[i] = parseFloat(n[i]);

}
console.log(n);

console.log(typeof n[2]);