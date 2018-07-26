/**
 * 思路：对字符串数组进行排序，拼接排序后的数组
 * @param {Number} numbers 
 */
function PrintMinNumber(numbers) {
    numbers.sort(function (s1, s2) {
        let c1 = s1 + "" + s2;
        let c2 = s2 + "" + s1;
        return c1 > c2;
    });
    let min = "";
    numbers.forEach(i => min += i)
    return min;
}