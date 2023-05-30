/**
 * Write a function compare 2 string. Receive 2 parameters are string1, string2 and compare those 2 strings, not case sensitive. Result will be boolean
 * Eg: compareString("aBc", "aBC") -> true
 * Eg: compareString("aBc", "aBdC") -> false
 * */
function compareString(string1, string2) {
    return string1.toLowerCase() === string2.toLowerCase();
}
var result = compareString ('abcd', 'aBc');
console.log(result)