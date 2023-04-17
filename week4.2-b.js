/**
 * Khai báo biến 2 biến a,b là giá trị số bất kì. Khai báo biến operatorType là giá trị chuỗi thuộc 4 giá trị sau : "add" || "minus" || "multiple" || "divide"
 * Nếu giá trị của operatorType ko hợp lệ thì in ra "Invalid operator". Ko cần kiểm tra a,b là số, nếu có thì tốt :)
 * Tùy vào giá trị của biến operatorType, in ra kết quả tương ứng. Ví dụ: operatorType = "add" => In ra kết quả của a + b.
 * , "minus", "multiple", "divide"
 */
var a = 4;
var b = 2;

var operatorType = "divide";
if (operatorType == "add") {
  console.log(a + b);
} else if (operatorType == "minus") {
  console.log(a - b);
} else if (operatorType == "multiple") {
  console.log(a * b);
} else if (operatorType == "divide") {
  console.log(a / b);
} else {
  console.log("Invalid operator");
}
