/**
 * 时间复杂度O(n)
 * @param {Number(float)} base 
 * @param {Number} exponent 
 */
function Power(base, exponent) {
    if (exponent === 0) {
        return 1
    } else if (Math.abs(base) < 0.00000000001) {
        return 0
    } else {
        var result = base
        for (var i = 1; i < Math.abs(exponent); i++) {
            result = result * base
        }
        if (exponent < 0) {
            return 1 / result
        } else {
            return result
        }
    }
}
/**
 * 写出指数的二进制表达，例如13表达为二进制1101。
 * 举例:10^1101 = 10^0001*10^0100*10^1000。
 * 通过&1和>>1来逐位读取1101，为1时将该位代表的乘数累乘到最终结果。
 */
function Power(base, n) {
    if (base == 0) {
        return 0
    }
    if (n === 0) {
        return 1
    }
    var res = 1, curr = base, exponent = Math.abs(n);
    while (exponent !== 0) {
        if ((exponent & 1) === 1)
            res *= curr;
        curr *= curr;
        exponent >>= 1;
    }
    return n >= 0 ? res : (1 / res);
}