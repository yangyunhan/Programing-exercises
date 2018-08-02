/**
 * 思路：1、检测长度为0的数组
 * 2、排序并计算0的个数
 * 3、排序后的数组遍历，如果后一个与前一个数字相等，返回false
 * 4、后一个和前一个的差距大小用0来补，如果补完后0的个数小于0，返回false
 * 5、返回true
 * @param {Array} numbers 
 */
function IsContinuous(numbers) {
    if (!numbers.lenth) return false
    numbers.sort()
    var zeroNum = 0
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            zeroNum++
        }
    }
    numbers.splice(0, zeroNum)
    for (var i = 0; i < numbers.length - 1; i++) {
        if (numbers[i + 1] === numbers[i]) return false
        zeroNum = zeroNum - (numbers[i + 1] - numbers[i]) + 1
        if (zeroNum < 0) return false
    }
    return true
}