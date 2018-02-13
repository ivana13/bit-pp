"use strict"
var e = 78;
var position = 3;
var arr = [2, -2, 33, 12, 5, 8];
var newArr = [];

for (var i = 0; i < position; i++){
    newArr[i]=arr[i];
} console.log(newArr);

newArr[position]=e;
 console.log(newArr);

 for (var i=position; i <arr.length; i++){
     newArr[i+1] = arr[i];
 }
 console.log(newArr);
