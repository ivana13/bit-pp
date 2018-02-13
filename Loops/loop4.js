//Write a program which prints the elements of the following array as a single string.

//var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var output = '';

for (var i = 0; i < x.length; i++) {
   var element = x[i];
   output += element;
}

console.log(x.length);
console.log(output);


