/**
 * Write a function receive an array number as parameter. If array only contain even numbers, return true, else return false
 * */

function checkIfAllEvenNumbers(input) {
    var result = true;
    for (var index = 0; input[index] %2 !== 0; index++) {
        result = false;    
        }
        return result;
    }
    
var arrayOfNumbers = [0, 2, 4, 6];

console.log(checkIfAllEvenNumbers(arrayOfNumbers))