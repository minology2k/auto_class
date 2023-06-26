/**
 * Write a function receive an array of numbers. Find the maximum number in the given array. MUST USE LOOP!
 * */
function findMaxNumber() {
    var max = 0;
    var arrayOfNumber = [1, 9, 3, 14];
    for (var key in arrayOfNumber) {
        if (arrayOfNumber[key] > max) {
            max = arrayOfNumber[key];
            key++;
        }
    }      
    return max; 
}

console.log(findMaxNumber());