function removeSuf(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
    var newArr = [arr[0]];
    var i = 0;
    var k = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != newArr[k]) {
            k++;
            newArr[k] = arr[i];
        }
    }
    return newArr;
}

var output = removeSuf([1,4,4,5,3,7,7,3,8,8,1]);
console.log(output);