/**
 * 思路：定义头尾指针，判断头尾指针相加的情况。两个数字相差越大，乘积之和越小。左右逼近
 * 与上一道题求数组中连续数字和为某固定值不同
 * @param {Array} a 
 * @param {Number} sum 
 */
function FindNumbersWithSum(a, sum) {
    var res = [], n = a.length, i = 0, j = n - 1;
    while (i < j) {
        if (a[i] + a[j] == sum) {
            res.push(a[i]);
            res.push(a[j]);
            break;
        }
        while (i < j && a[i] + a[j] > sum)--j;
        while (i < j && a[i] + a[j] < sum)++i;
    }
    return res;
}