/**
 * Viết hàm trả về firstName trong họ tên của bạn. Tham số đầu vào là họ tên
 * eg: var result = getCharactersInName("Dinh Duyen") => result will be: Duyen
 * */
function getCharactersInName(fullName) {
    var fullNameInString = fullName.split(' ');
    return fullNameInString[fullNameInString.length - 1];
}
var firstName = getCharactersInName('Dinh Thi Hue Duyen');
console.log(firstName);