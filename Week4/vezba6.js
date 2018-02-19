nekoIme = function (str1) {
    var nekoTamoIme = str1.trim().split(' ');
    if (nekoTamoIme.length > 1) {
        return (nekoTamoIme [0] + " " + nekoTamoIme[1].charAt(0) + ".");

    }
    return nekoTamoIme[0];
}
console.log(nekoIme('Dejo Jurisic'));
