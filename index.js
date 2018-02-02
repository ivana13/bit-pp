var a = 65;

if(typeof a === "number"){
    if(a > 9 && a < 100){
        var b = a % 10;
        var c = (a - b) / 10;
        
        var z = "";
        z += b;
        z += c;
        console.log(z);
    }
} else {
    console.log("Error");
}