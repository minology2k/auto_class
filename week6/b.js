/**
 * Write a function return day in week by index. Receive a parameter as index. Result will be day in week.
 * Eg: dayInWeek(1) -> Monday
 * Eg: dayInWeek(2) -> Tuesday
 * Eg: dayInWeek(7) -> Sunday
 * Eg: dayInWeek(8) -> Monday
 * Eg: dayInWeek(10) -> Wednesday
 * */
function nameOfToday (stringdate) {
var date = new Date(stringdate);
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
console.log(dayNames[date.getDay()]);
}
nameOfToday ("2023-05-29")