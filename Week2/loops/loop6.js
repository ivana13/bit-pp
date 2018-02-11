//Write a program that prints the elements of the following array.
//var a = [
  //  [1, 2, 1, 24], 
    //[8, 11, 9, 4], 
    //[7, 0, 7, 27]
    //];
    var array = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27]
    ];
 
    for (var i in array) {
        console.log("row " + i);
        for (var j in array[i]) {
            console.log(" " + array[i][j]);
        }
    }
 