/**
 * 思路：如果字母的正向索引得到的位置等于倒序索引，则只出现过一次，直接返回索引
 * @param {String} str 
 */
function FirstNotRepeatingChar(str) {
    if (str.length === 0) return -1
    if (str.length === 1) return 0
    var result = []
    for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) return i
    }
    return -1
}
/**
 * 思路：利用map结构，存储每个字母的频数，再次遍历找到第一个频数为1的字母的索引
 */
function FirstNotRepeatingChar(str) {
    var mp = new Map();
    var count = 1
    for (var i = 0; i < str.length; ++i) {
        if (mp.get(str[i])) {
            mp.set(str[i], ++count)
            continue
        }
        mp.set(str[i], 1)
    }
    for (var i = 0; i < str.length; ++i) {
        if (mp.get(str[i]) === 1) return i;
    }
    return -1;
}