var a = "A";

switch (a) {
    case "a":
    case "A":
        console.log("Good Job!");
        break;
    case "b":
    case "B":
        console.log("Pretty Good!");
        break;
    case "c":
    case "C":
        console.log('Passed!');
        break;
    case "d":
    case "D":
        console.log("Not so good!");
        break;
    case "f":
    case "F":
        console.log("Failed! Go study!");
        break;
    default:
        console.log("Unknown Grade!");
        break;
}
