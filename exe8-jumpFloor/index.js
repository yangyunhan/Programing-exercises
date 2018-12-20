/**
 * 思路：
 * （1）不关注跳多少次，关注每次的跳法，只有两种：跳一下或者两下。
 *  跳一下，剩下n-1也是这么跳；跳两下，剩下n-2也是这么跳。
 *  所以可以转化成f(n) = f(n-1) + f(n-2)。
 * （2）倒着想，如果跳6层台阶，只能从第5层跳一下到第6层或者从第4层跳一下到第6层。
 *  所以求f(6)可以转化为求f(5)+f(4)，以此类推。
 * （3）找规律，列出前几个的结果发现规律。
 *  总之是个斐波那契数列。
 * @param {Number} number 
 * @param {Number} ac1 
 * @param {Number} ac2 
 */
function jumpFloor(number, ac1 = 1, ac2 = 2) {
    if (number === 0) {
        return 0
    } else if (number === 1) {
        return 1
    } else if (number === 2) {
        return ac2
    } else {
        return jumpFloor(number - 1, ac2, ac1 + ac2)
    }
}

//柯里化
function jumpFloor(number) {
    return currying(tailFibonacci, 1, 1)(number)
}
function tailFibonacci(n, ac1, ac2) {
    if (n === 0) return 0
    if (n === 1) return 1
    if (n === 2) return ac2
    else {
        tailFibonacci(n - 1, ac2, ac1 + ac2)
    }
}
function currying(fn, p1, p2) {
    return function (m) {
        return fn.call(this, m, p1, p2)
    }
}