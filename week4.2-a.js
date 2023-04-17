/**
 * Khai báo biến month là tháng bất kì trong năm
 * In ra tháng đấy là tháng có bao nhiêu ngày (ko cần tính năm nhuận)
 * Nếu giá trị của tháng đó ko hợp lệ thì in ra "Invalid month"
 * Dùng english nhé :)
 */
var month = 'January';
var month30Days = ['April', 'June', 'September', 'November'];
var month31Days = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
if (month === 'February') {
    console.log(month + ' has 28 or 29 days.');
}
else if (month30Days.indexOf(month) > -1) {
    console.log(month + ' has 30 days.');
}
else if (month31Days.indexOf(month) > -1) {
    console.log(month + ' has 31 days.');
}
else {
    console.log('Invalid month');
}