var arrayOfNumbers = [1, 0, -6, 16];

    function findMaxNumber(input) {
        var max = 0;
        for (key in arrayOfNumbers) {
            if (arrayOfNumbers[key] > max) {
                max = arrayOfNumbers[key];
            }
        }
        return max;
    }

 

    function findMinNumber(input) {
        var min = arrayOfNumbers[0];
        for (key in arrayOfNumbers) {
            if (arrayOfNumbers[key] < min) {
                min = arrayOfNumbers[key];
            }
        }
        return min;
    }

    function findEvenNumber(input) {
    var maxNumber = findMaxNumber(arrayOfNumbers);
    var minNumber = findMinNumber(arrayOfNumbers);
    var i = minNumber % 2 == 0 ? minNumber : minNumber + 1;
    var result = [];
    for (i; i <= maxNumber; i += 2) {
        if (i % 2 === 0) {
            result.push(i);
            }
        }        
    return result
}
console.log(findEvenNumber(arrayOfNumbers))