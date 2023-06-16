/**
 * Write a function PRINT all even numbers from 0 to 1000
 * */
function printEvenNumber() {
    for (var a = 2; a < 1001 && a % 2 == 0; a+=2) {
        console.log(a)
    }
}
printEvenNumber()