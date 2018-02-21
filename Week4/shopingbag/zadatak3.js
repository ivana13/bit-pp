function ifOddNumOfElems(arr) {
    if (arr.length % 2 !== 0) {
        var answer = true;
    } else {
        answer = false;
    }
    return answer;
}

var output = ifOddNumOfElems([1,4,5,7,8,9]);
console.log(output);