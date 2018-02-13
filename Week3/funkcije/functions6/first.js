
"use strict"
function brojac(nasaRec){

    var counter = 0;

    for(var i=0;i<nasaRec.length;i++){

        switch(nasaRec[i]){
            case "a" : counter++;
            break;
            case "e": counter++;
            break;
            case "i": counter++;
            break;
            case "o" : counter ++;
            break;
            case "u" : counter ++;
            break;
        }
        
    }
    return counter;
}

console.log(brojac("nasaskolajaeaeaeaeaedandva"));