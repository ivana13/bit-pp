"use strict"
function counter(strWord, letter) {
    var sum="";
    for (var i =0; i< strWord.length; i++) {
     if (strWord[i]=== letter){
         sum++
     }  

    }
    return sum;
}
console.log(counter("Totoro","o"));