//Write a program that for a string input of a grade from “A”-“F” 
//outputs a proper info message about that grade in the following manner:
 //A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed".
//  Input different from letters A-F outputs a message "Unknown grade".

var x = 5 ;

switch (x) {
    case "A":
    console.log("Good job");
    break;

    case "B":
    console.log("Pretty good");
    break;

    case "C": 
    console.log("Passed");
    break;

    case "D":
    console.log("not so good...");
    break;

    case "F":
    console.log("failed!");
    break;

    default:
    console.log("nothing...");
    break;
}