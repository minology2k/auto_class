/**
 * Viết hàm trả về họ tên in hoa firstName trong họ tên của bạn. Tham số đầu vào là họ tên
 * eg: var result = getCharactersInName("Dinh Duyen") => result will be: Dinh DUYEN
* */

function getCharactersInName(fullName) {
    var nameInArray = fullName.split(' ');
    var firstName = nameInArray[nameInArray.length - 1];
    var firstNameInUppercase = firstName.toUpperCase();
    return fullName.replace(firstName, firstNameInUppercase);
}
var result = getCharactersInName('Dinh Thi Hue Duyen');
console.log(result);