/**
 * Khai báo 3 biến a,b,c là số với giá trị bất kì với a,b,c thỏa mãn PT: ax2 + bx + c = 0
 * Giải PT in ra nghiệm x :))
 */
var a = 1;
var b = 2;
var c = 1; 
var z = b*b - 4*a*c;
var x1, x2;
if (z < 0) {
    console.log('The equation has no solution');
}
else if (z = 0) {
    console.log('The equation has double solution ' + x1 + ' ' + '= ' + x2 + ' =' + '-b / (2*a)');
}
else {
    console.log('The equation has 2 distinct solutions, x1 = ' + (-b + Math.sqrt(z)) / 2*a + ' and x2 = ' + (-b - Math.sqrt(z)) / 2*a);
}