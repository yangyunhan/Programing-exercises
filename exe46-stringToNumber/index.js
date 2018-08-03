/**
 * 思路：
 * 1、考虑字符串是0
 * 2、考虑符号，将符号位替换为0（js中字符串是常量，不可以改变，所以通过截取原始字符串赋值给新的变量）
 * 3、每一位字符减字符0可以得到数值，按位相乘相加（注意减0后需要转化为10进制数确保字符串转为数字）
 * @param {String} str 
 */
function StrToInt(str) {
    if (str.length === 0) return 0;
    var strCopy = '';
    var symbol = 1;
    if (str[0] == '-') {
        symbol = -1;
        strCopy = str.slice(1)
    } else if (str[0] == '+') {
        symbol = 1;
        strCopy = str.slice(1)
    } else{
        strCopy = str
    }
    var sum = 0;
    for (var i = 0; i < strCopy.length; ++i) {
        if (strCopy[i] < '0' || strCopy[i] > '9') {
            sum = 0;
            break;
        }
        sum = sum * 10 + parseInt(strCopy[i] - '0', 10);
    }
    return symbol * sum;
}