"use strict"
/*var global = 123;
var i =10;
function myFunc() {
   console.log(global);
   var global = 1;
   console.log(global);
}*/

//myFunc();

var t = 999;

function three() {
    console.log(t);
    var t = 1000; /*ako setujemo novo t, to je lokalna i ona ima prednost ispred globalne t*/
    if (t < 1000 && t > 99) { /*posto nemamo u funkciji lokalnu var sa imenom "t", pristupa se globalnoj, i onda uzima t=999, pa uslov true*/
        return true
    } else {
        return false
    }
}
console.log(three());