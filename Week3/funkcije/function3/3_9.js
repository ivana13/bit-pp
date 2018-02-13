
"use strict"
function cutSentence(a,n,m){
    var output = new Array(m-n);
    for(var i=n; i< m; i++){
        output[i-n] = a[i];
    }
    
    //console.log("a = " + a + "; n = " + n + "; m = " + m);
    //console.log("Cut sentence result: "+ output);

    return output;
}

function areArraysEqual(a1, a2){
    for(var i=0; i<a1.length; i++){
        if(a1[i] != a2[i]) {
            //console.log("Arrays are not equal");
            return false;
        }
    }
    //console.log("Arrays are equal!");
    return true;
}


function hideWord(sentence, word){
    var output = "";
    var n = word.length;
    var dots = "...";

    for(var i = 0; i<sentence.length; i++){
        var partOfSentence = cutSentence(sentence, i, n+i);
        //console.log("Part of sentence : " + partOfSentence);
        
        var isEqual = areArraysEqual(word, partOfSentence);

        if(isEqual){
            output = output + dots;
            i = i - 1 + n; // we need to skip word ("address" in our case) in sentence because we are hiding it with dots
        } else {
            output = output + sentence[i];
        }
    }
    return output;
}

var sentence = "myemailaddress@gmail.com";
var word = "address";


var testResult = hideWord(sentence, word);

console.log(testResult);