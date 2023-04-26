/**
 * Viết hàm tính diện tích hình tròn. Tham số đầu vào là bán kính. Kết quả là diện tích hình tròn với bán kính đó
 * eg: var result = circleArea(3) = 28.274333882308138
 * */
function circleArea(r) {
    return (r * r * Math.PI);
}
var result = circleArea(3);
console.log(result);