/**
 * Write a function return day in week by index. Receive a parameter as index. Result will be day in week.
 * Eg: dayInWeek(1) -> Monday
 * Eg: dayInWeek(2) -> Tuesday
 * Eg: dayInWeek(7) -> Sunday
 * Eg: dayInWeek(8) -> Monday
 * Eg: dayInWeek(10) -> Wednesday
 *
 * */
function dayInWeek(index) {
var dayNames = ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"];
if (index % 7 == 0) {
    return dayNames[dayNames.length - 1];
}
else if (index % 7 > 0) {
    return dayNames[(index % 7) - 1]
}
}
var result = dayInWeek(10);
console.log(result);