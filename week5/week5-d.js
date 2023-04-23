/**     console.log(fullName.split(' ')[0] + ' '+ fullName.split(' ')[1].toUpperCase());

 * Viết hàm trả về họ tên in hoa firstName trong họ tên của bạn. Tham số đầu vào là họ tên
 * eg: var result = getCharactersInName("Dinh Duyen") => result will be: Dinh DUYEN
 * */
function getCharactersInName(fullName) {
    console.log(fullName.split(' ')[0] + ' '+ fullName.split(' ')[fullName.split(' ').length - 1].toUpperCase());
}
getCharactersInName('Dinh Duyen');