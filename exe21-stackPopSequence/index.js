/**
 * 思路：找到第一个出栈的元素在入栈序列中的序号，接下来只要看这个序号之前的元素是否符合出栈规则:
比如 1,2,3,4,5       3 先出， 那就只要看1和2在出栈序列中的序号分布，正确的出栈顺序
应该是2先1后，如果在出栈序列中出现了1先2后，直接返回false，否则(就这个例子来说)，返回
true
 * @param {ListArray} pushV 
 * @param {ListArray} popV
 */
function IsPopOrder(pushV, popV) {
    if (!pushV || !popV) return false
    for (x of popV) {
        if (pushV.indexOf(x) < 0) return false
    }
    var firstIndex = pushV.indexOf(popV[0])
    for (var i = 0; i < firstIndex - 1; i++) {
        for (var j = i + 1; j < firstIndex; j++) {
            if (i < j && popV.indexOf(pushV[i]) < popV.indexOf(pushV[j])) return false
        }
    }
    return true
}
/**
 * 思路：遍历压入栈，如果遇到出入栈相同的元素，删除入栈元素，入栈指针前移，出栈指针后移；否则入栈指针后移，继续判断。
 * 如果入栈数组最后长度为0则是合适的出栈顺序，否则不是。
 */
function IsPopOrder(pushV, popV) {
    for (var i = 0, Len = pushV.length, j = 0; i < Len;) {
        while (j < Len && pushV[i] === popV[j]) {
            pushV.splice(i, 1);
            i--;
            j++;
            console.log('i',i)
            console.log('pushV[i]', pushV[i])
            console.log('popV[j]', popV[j])
        }
        i++;
    }
    return pushV.length == 0 ? true : false;
}