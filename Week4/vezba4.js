'use strict'

function alphabetOrder(str) {
   var newArr =[];
    var words = str.split(" ")
    
    for (var i = 0; i < words.length; i++) {
        var element = words[i];
        newArr.push(element.split('').sort().join(''))
    }

    return newArr.join(' ');
}
console.log(alphabetOrder("Danas sam jela pljeskavice sa majonezom i kiselim krastavcima"));