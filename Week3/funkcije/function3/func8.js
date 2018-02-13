"use strict"

function cutSentence(sentence, n, m) { //function which cuts a sentence/string from n to m place//
    var output;
    for (var i = n; i < m; i++) {
        output[i - n] = sentence[i];
    }
    return output;
}

function areEqual(str1, str2) { //are two arrays of same length equal?//
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] != str2[i]) {
            return false;
        }
    }
    return true;
}

function wordFromSentence(word, sentence) {
    var output = 0;
    var l = word.length;
    for (var i = 0; i < sentence.length; i++) {
        var subsentence = cutSentence(sentence, i, i + l);
        var isEqual = areEqual(word, subsentence);
        if (isEqual) {
            output++;
        }
        return output;
    }

    var result=wordFromSentence("Laki", "Laki i Paki i Laki");
    console.log(result);
    

}