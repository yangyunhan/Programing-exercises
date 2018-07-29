/**
 * 思路：先找到索引，在这之后遍历数组，相等就计数
 * @param {Array} data 
 * @param {Number} k 
 */
function GetNumberOfK(data, k) {
    if (!data.length) return 0
    var index = data.indexOf(k)
    var count = 0
    for (var i = index; i < data.length; i++) {
        if (data[i] === k) {
            count++
        }
    }
    return count
}