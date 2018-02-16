function blank(a) {
    var result = "";
    for (var i = 0; i < a.length; i++) {
        if (a[i] === " ") {
            result = true;
        } else {
            result = false;
        } 
    }
    return result;
}

console.log(blank("               "));

