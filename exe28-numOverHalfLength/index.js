/**
 * 思路：士兵守卫
 * 第一个数为待比较的数，遇到相同的数计数加一，不相同的数计数减一，为0，暂存为当前的数字
 * @param {Array} numbers 
 */
function MoreThanHalfNum_Solution(numbers) {
    var length = numbers.length
    if (length === 0) {
        return 0
    } else if (length === 1) {
        return numbers[0]
    } else {
        var tmp = numbers[0], count = 1
        for (var i = 1; i < length; i++) {
            if (tmp === numbers[i]) {
                count++
            } else {
                count--
            }
            if (count === 0) {
                tmp = numbers[i]
                count = 1
            }
        }
        count = 0
        for (var i = 0; i < length; i++) {
            if (numbers[i] === tmp) {
                count++
            }
        }
        if (count * 2 > length) {
            return tmp
        }
        return 0
    }
}
/**
 * 这个数字出现次数多于数组长的一半，那么排序后的位置也应该在中间的位置
 */
function MoreThanHalfNum_Solution(numbers) {
    var length = numbers.length
    if (length === 0) {
        return 0
    } else if (length === 1) {
        return numbers[0]
    } else {
        var tmpArr = numbers.sort()
        var middle = Math.floor(length / 2)
        var result = tmpArr[middle]
        var count = 0
        for (var i = 0; i < length; i++) {
            if (numbers[i] === result) {
                count++
            }
        }
        if (count * 2 > length) {
            return result
        }
        return 0
    }
}