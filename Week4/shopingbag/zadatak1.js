function duplikate(niz){
    var newArray=[];
    for(var i=0 ; i<niz.length; i++){
    newArray.push(niz[i]);
    newArray.push(niz[i]);
    }
    return newArray;
}

var output=duplikate( [2, 4, 7, 11, -2, 1]);
console.log(output);
