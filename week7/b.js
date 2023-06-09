/**
 * Write a function check hour in a day. Recive a parameter as hour in a day and return correct type of hour (AM or PM). Invalid hour will return null. Must use TENARY OPERATOR somewhere!
 * eg: checkHour(0) -> 0:00 AM
 * eg: checkHour(5) -> 5:00 AM
 * eg: checkHour(12) -> 5:00 AM
 * eg: checkHour(15) -> 15:00 PM
 * eg: checkHour(24) -> null
 * eg: checkHour(25) -> null
 * eg: checkHour(-1) -> null
 * eg: checkHour(abc) -> null
 * eg: checkHour(5.5) -> null
 * */
function checkHour(index) {
    var result; 
    if (index >= 0 && index <= 12) {
       result = index + ':00 AM';
     }
else {result = (index > 12 && index < 25) ? (index + ':00 PM') : 'null';
}
console.log(result); 
}                                                                                           
checkHour(-2);