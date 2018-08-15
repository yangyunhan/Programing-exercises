/**
 * 思路：以每个数字做为数组的下标，统计每个数字的个数，循环新生成的数组，按照计数输出数组
 * @param {Array} array 
 * @param {Number} maxValue 
 */
function countSort(array, maxValue) {
    var result = [], index = 0, newArr = new Array(maxValue + 1)
    for (var i = 0; i <= maxValue; i++) {
        newArr[i] = 0
    }
    array.forEach(x => newArr[x]++)
    for (var j = 0; j < newArr.length; j++) {
        if (newArr[j] > 0) {
            for (var i = 0; i < newArr[j]; i++) {
                result[index++] = j
            }
        }
    }
    return result
}