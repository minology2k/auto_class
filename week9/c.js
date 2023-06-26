var stringOfNumbers = [1, 3, 0, 4];

 

function findEvenNumber() {

    function findMaxNumber() {
        var max = 0;
        for (key in stringOfNumbers) {
            if (stringOfNumbers[key] > max) {
                max = stringOfNumbers[key];
            }
        }
        return max;
    }

    function findMinNumber() {
        var min = stringOfNumbers[0];
        for (key in stringOfNumbers) {
            if (stringOfNumbers[key] < min) {
                min = stringOfNumbers[key];
            }
        }
        return min;
    }
    var num = 0;
    while(num%2 == 0 && num <= 2) {
    console.log(num);
    num += 2;
    }
}
findEvenNumber()