/**
 * Write a function receive an integer number. Return all the divisor of that number as an array.
 * Example: findAllDivisor(5) => Result will be [1,5]
 * Example: findAllDivisor(10) => Result will be [1,2,5]
 * Example: findAllDivisor(8) => Result will be [1,2,4]
 * */
var integerNumber = 0;
function findAllDivisor(input) {
     var result = [];
     if (input > 0) {
         for (var i = 1; i <= input; i++) {
         if (input %i == 0) {
             result.push(i);
         }
     }
     return result
     }
     if (input == 0) {
         result = 'There is no divisor.';
     }
     else {
        for (var i = -1; i >= input; i--)  {
         if (input %i == 0) {
             result.push(i, i * -1);
         }
     } 
     }
     return result
}
console.log(findAllDivisor(integerNumber));