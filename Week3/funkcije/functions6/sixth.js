"use strict"
function temperatureC2F(inputT) {

    var output = inputT * (9 / 5) + 32;
    return "Temperature of " + inputT + " degrees in Celsius, is " + output + " in Fahrenheit."
}
var result = temperatureC2F(20);
console.log(result);
