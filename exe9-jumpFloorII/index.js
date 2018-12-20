/**
 * 思路：
 * 斐波纳切数列，做两个等式的减法
 * 找规律，递归写法
 * @param {Number} number 
 */
function jumpFloorII(number) {
    if (number === 0) {
        return 0
    } else if (number === 1) {
        return 1
    } else {
        return 2 * jumpFloorII(number - 1)
    }
}
/**
 * 思路：找规律，循环写法
 */
function jumpFloorII(number) {
    var a = 1
    while (--number) {
        a = a * 2
    }
    return a
}
/**
 * 位操作符用法
 * https://juejin.im/entry/57317b2679df540060d5d6c2
 * 测试代码运行时间：
 * 代码开始前：console.time('注释')
 * 代码结束时：console.timeEnd('一样的注释，相当于标识')
 * 位移操作符<<相当于*2，>>相当于/4，Math.floor(i/3)相当于i/3|0，Math.ceil(i/3)相当于(i/3|0+1)，parseInt加上进制数会更快
 * 前提是只适用于数字
 * indexOf
 * es6/7中新增的数组方法find()\findIndex()\includes()
 * es6/7中新增的字符串方法repeat()\padStart()\padEnd()
 */
function jumpFloorII(number) {
    var a = 1; return a << (number - 1);
}
