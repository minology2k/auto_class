/**     }
 * Viết hàm chuyển đổi thời gian về milliseconds. Gồm 2 tham số đầu vào là time (number) và convertType (HOUR || MINUTE || SECOND).
 * eg: var result = convertToMillisecond(1, "SECOND") => result will be 1000ms
 * eg: var result = convertToMillisecond(1, "MINUTE") => result will be 60000ms
 * 
}
 * */
function convertToMillisecond(number, convertType) {
    if (convertType === 'SECOND') {
        return (number * 1000 + 'ms');
    }
    else if (convertType === 'MINUTE') {
        return (number * 60000 + 'ms');
    }
    else if (convertType === 'HOUR') {
        return (number * 360000000 + 'ms');
    }
}
var convertTime = convertToMillisecond(2, 'MINUTE');
console.log(convertTime);