function star(a) {
    var b = "";
    var c ="";

    for (var i = 0; i < a; i++) {


        for (var j = 0; j < a; j++) {
            b += "*";
            if (i === 1 || i === 5 || j === 1 || j === 5){

                c+= "";
            }
        }
        b += "\n";
       
    }
    return b;
}
star(5);

if ("a" === "a") {
    
}

function name() {
     "bla"
}
console.log(name());


console.log(star(5));
