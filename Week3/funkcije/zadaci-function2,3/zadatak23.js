"use strict"
function yearsTillRetirement(curYear, yearOfbirth, gender) {
    var c = curYear - yearOfbirth;
    var yearstillret;
    if (c >= 65 || c >= 60) {
        return "You are already retired.";
    }
    if (gender === "male") {
        yearstillret = 65 - c;
    } else if (gender === "female") {
        yearstillret = 60 - c;
    }
    return yearstillret;
}
console.log(yearsTillRetirement(2018, 2000, "male"));
