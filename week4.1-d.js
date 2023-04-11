/**
 * Khai báo 3 biến a,b,c tương ứng với 3 cạnh của tam giác.
 * Kiểm tra tam giác có 3 cạnh a,b,c là tam giác gì (tam giác cân, tam giác đều, tam giác thường)
 * In ra "Tam giác với 3 cạnh a = ..., b = ... và c = ... là tam giác ..."
 * In ra tiếng anh hết nhé :))
 * */
var a = 3;
var b = 3;
var c = 5; 
if (a == b && b == c) {
    console.log('The triangle with side a = ' + a + ', side b = ' + b + ' and side c = ' + c + ' is an isosceles triangle.');
}
else if (a == b || b == c || a == c) {
    console.log('The triangle with side a = ' + a + ', side b = ' + b + ' and side c = ' + c + ' is an equilateral triangle.');
}
else {
    console.log('The triangle with side a = ' + a + ', side b = ' + b + ' and side c = ' + c + ' is a scalene triangle.');
}