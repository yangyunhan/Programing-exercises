/**
 * 思路：求出所有子集合的和，利用Math.max求最大值
 * @param {Array} array 
 */
function FindGreatestSumOfSubArray(array) {
    var length = array.length
    if (length === 0) return 0
    var sum = 0, sumArr = []
    for (var i = 0; i < length; i++) {
        sum = array[i]
        sumArr.push(array[i])
        for (var j = i + 1; j < length; j++) {
            sum += array[j]
            sumArr.push(sum)
        }
    }
    return Math.max(...sumArr)
}
/**
 * 思路：动态规划
 * F(i)以array[i]为末尾元素的子数组的和的最大值，子数组的元素的相对位置不变，求得的值是每一步中当前值和前面和的最大值
 * F(i) = max(F(i-1)+array[i] ， array[i])
 * res：所有子数组的和的最大值，最终要求的
 * res=max(res，F(i))
 */
function FindGreatestSumOfSubArray(array) {
    var res = array[0];
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        max = Math.max(max + array[i], array[i]);
        res = Math.max(max, res);
    }
    return res;
}