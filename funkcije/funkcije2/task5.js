function occurrence(a,b){
    var position=0;
    for ( var i = 0; i < a.length; i++){
        if(a[i] === b){
            position+=b
        }else{
            position = -1
        }
    }
    return position
}

console.log(occurrence("Ivana","v"));
