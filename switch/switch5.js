var a = 3;

switch (a) {
    case 1:
    case 2:
    case 12:
        console.log('winter');
        break;

    case 4:
    case 5:
    case 3:
        console.log("spring");
        break;

    case 7:
    case 8:
    case 6:
        console.log("summer");
        break;

    case 10:
    case 11:
    case 9:
        console.log("autumn");
        break;
    default:
        console.log("Input must be number between 1 and 12!");
        break;
}