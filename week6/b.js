/**
 * Write a function return day in week by index. Receive a parameter as index. Result will be day in week.
 * Eg: dayInWeek(1) -> Monday
 * Eg: dayInWeek(2) -> Tuesday
 * Eg: dayInWeek(7) -> Sunday
 * Eg: dayInWeek(8) -> Monday
 * Eg: dayInWeek(10) -> Wednesday
 * */
var today = new Date("2023-05-28");
var day = today.getDay();
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
console.log(dayNames[day]);