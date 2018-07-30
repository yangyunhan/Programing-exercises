/**
 * 思路：利用索引找到正向索引值等于逆向索引值的数字
 * @param {Array} array 
 */
function FindNumsAppearOnce(array) {
    var result = []
    array.filter(function (arr, index) {
        if (array.indexOf(arr) === array.lastIndexOf(arr)) {
            result.push(arr)
            return true
        }
        return false
    })
    return result
}