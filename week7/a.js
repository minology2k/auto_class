/**
 * Write a function check month in year. Receive a parameter is a number and return the month in year. If receive invalid input, return "INVALID INPUT". Using SWITCH
 * eg: checkMonth(1) -> January
 * eg: checkMonth(7) -> July
 * eg: checkMonth(12) -> December
 * eg: checkMonth(13) -> 'INVALID INPUT'
 * eg: checkMonth(-1) -> 'INVALID INPUT'
 * eg: checkMonth(abc) -> 'INVALID INPUT'
* */
function checkMonth(index) {
    switch(index) {
        case 1:
            return 'January';
            break;
        case 2:
            return 'February';
            break;
        case 3:
            return 'March';
            break;
        case 4:
            return 'April';
            break;
        case 5:
            return 'May';
            break;
        case 6:
            return 'June';
            break;
        case 7:
            return 'July';
            break;
        case 8:
            return 'August';
            break;
        case 9:
            return 'September';
            break;
        case 10:
            return 'October';
            break;
        case 11:
            return 'November';
            break;
        case 12:
            return 'December';
            break;
        default:
            return 'INVALID INPUT';
    }
}

console.log(checkMonth('a'));