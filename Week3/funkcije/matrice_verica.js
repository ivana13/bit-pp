"use strict"

function matrice_1(m) {
 
    for (var i = 0; i < m.length; i++) {
        console.log("B");
        for (var j = 0; j < m[i].length; j++) {
            console.log("M");
        }
        console.log("E\n");
    }
}

var matrix = [[9,3,8,6,1],[55,32,0,7,4],[15,7,8,32,4],[4,14,5,3,7],[0,0,4,8,7]];

console.log("MATRICE 1");
matrice_1(matrix);
//////////////////////////////////////////////////////////////////////////////////////////
function matrice_2(m) {
    for (var i = 0; i < m.length; i++) {
        console.log("Begin m[" + i + "]");
        for (var j = 0; j < m[i].length; j++) {
            console.log(m[i][j]);
        }
        console.log("End m[" + i + "]\n");
    }
}

console.log("MATRICE 2");
matrice_2(matrix);
//////////////////////////////////////////////////////////////////////////////////////////
function matrice_3(m) {
    for (var i = 0; i < m.length; i++) {
        var row = "";
        for(var j=0; j<m[i].length; j++){
            row += m[i][j];
        }
        console.log(row);
    }
}

console.log("MATRICE 3");
matrice_3(matrix);

var matrix_stars= [['* ','* ','* ','* ','* '],['* ',"  ","  ","  ",'* '],['* ',"  ","  ","  ",'* '],['* ',"  ","  ","  ",'* '],['* ','* ','* ','* ','* ']];

console.log("\n")


console.log("MATRICE 3 STARS");
matrice_3(matrix_stars);