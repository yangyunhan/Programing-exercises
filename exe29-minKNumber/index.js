function GetLeastNumbers_Solution(input, k) {
    if (input.length === 0) return []
    if (k > input.length) return []
    var sortArr = input.sort()
    var result = []
    for (var i = 0; i < k; i++) {
        result.push(sortArr[i])
    }
    return result
}
/**
 * 蒂姆排序
 */
function GetLeastNumbers_Solution(input, k) {
    if (input.length === 0) return []
    if (k > input.length) return []
    var sortArr = input.sort()
    return sortArr.slice(0, k)
}
/**
 * 
 */