function NumberOfLetters(a,b){
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b || a[i] === b.toUpperCase()){
    
            result+=1;
            
        }
}
return result;

}
console.log(NumberOfLetters("dsdffgnm", "f"));
