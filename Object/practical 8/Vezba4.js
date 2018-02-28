
function smallestElement(arr){
    var b = Math.min(...arr);
    var c = arr.lastIndexOf(b);
    return {
        minValue:b,
        minLastIndex:c
    };


}


console.log(smallestElement( [1, 4, -2, 11, 8, 1, -2, 3]
));
