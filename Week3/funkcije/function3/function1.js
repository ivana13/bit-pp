"use strict"
function insertString(input, string, place) {
    var newstring = "";

    //if (typeof input === "string" && typeof place === "number") {
    for (var i = 0; i < string.length; i++) {
        if (i === place) {
            //string.length+=place;
            i=input.length+place+1 ;
            newstring += input;

            //i === string.length - place;

        } else {

            newstring += string[i];

        }

    }


    return newstring;
}

console.log(insertString("my", "any string", 4));
