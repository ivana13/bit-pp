/* Write a program that shows text
 representation of a day in a week for a
  number input from 1 to 7. Print output
   in console. For input 1 it should output
    Monday.  */

    var x = 9;
    var result = '';
    
    switch (x) {
        case 1:
            result = "Ponedeljak";
            break;
        case 2:
            result = "Utorak";
            break;
        case 3:
            result = "Sreeeda";
            break;
        case 4:
            result = "Čet";
            break;
        case 5:
            result = "Petak";
            break;
        case 6:
            result = "šabat šalom";
            break;
        case 7:
            result = "NeĐelja gospodnja";
            break;
        default:
            result = "Nemam pojma";
            break;
    }
    console.log(result);