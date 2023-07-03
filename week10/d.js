/**
 * Write a function receive an array of positive numbers as parameter. Return an array contain numbers that have more than 2 divisors. If no numbers match the requirement, return empty array;
 * */
var arrayOfNumbers = [4, 6, 8];

function printNumbers(input) {
    for (var index = 0; index <= input.length -1; index++) {
    var result = [];
    for (var i = 2;i < input[index]; i++) {
    if (input[index] %i == 0) {
        result.push(input[index]);
    }
} 
}
return result;
}
console.log(printNumbers(arrayOfNumbers))