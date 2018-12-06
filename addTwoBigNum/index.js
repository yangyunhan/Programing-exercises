/**
 * 
 * @param {Number} a 大整数
 * @param {Number} b 大整数
 */
function add(a, b) {
    var aStr = a.toString(), bStr = b.toString(), aLen = aStr.length, bLen = bStr.length;
    var carry = 0, result = [], len = Math.max(aLen, bLen), i = len;
    while (i--) {
        var sum = (+aStr[i - len + aLen] | 0) + (+bStr[i - len + bLen] | 0) + carry;
        carry = Math.floor(sum / 10);
        result.unshift(sum % 10);
    }
    if (carry) result.unshift(carry);
    return result.join('');
}

/**
 * 
 * @param {String} a 大整数的字符串表示
 * @param {String} b 大整数的字符串表示
 */
function sumStrings(a, b) {
    var result = [], count = 0;
    //if (a.length < b.length) b = [a, a = b][0];
    if (a.length < b.length) [a, b] = [b, a];
    b = Array(a.length - b.length + 1).join('0') + b;
    var arrA = a.split(''), arrB = b.split('');
    for(var j = 0; j < a.length; j++){
        var temp = (Number(arrA.pop()) + Number(arrB.pop())) + count;
        temp > 10 ? [temp, count] = [temp - 10, 1] : count = 0;
        result.unshift(temp);
    }
    result.unshift(count);
    return result.join('').replace(/^0+/, '');
}

/**
 * 
 * @param {String} a 大整数的字符串表示 
 * @param {String} b 大整数的字符串表示
 */
function sumStrings(a, b){
    var res = '', c = 0;
    a = a.split(''), b = b.split('');
    while(a.length || b.length || c){
        c += ~~a.pop() + ~~b.pop();
        res = c % 10 + res;
        c = c > 9;
    }
    return res.replace(/^0+/, '');
}