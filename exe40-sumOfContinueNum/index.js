/**
 * 思路：用两个数字begin和end分别表示序列的最大值和最小值，
 * 首先将begin初始化为1，end初始化为2。
 * 如果从begin到end的和大于s，我们就从序列中去掉较小的值(即增大begin),相反，只需要增大end。
 * 终止条件为：一直增加begin到(1+sum)/2并且end小于sum为止。
 * @param {Number} sum 
 */
function FindContinuousSequence(sum) {
    var res = [];
    if (sum < 3) return res;
    var mid = (sum + 1) >> 1;
    var begin = 1, end = 2, cur = begin + end;
    while (begin < mid && end < sum) {
        while (cur > sum) {
            cur -= begin;
            begin++;
        }
        if (cur === sum)
            InsertRes(begin, end, res);
        end++;
        cur += end;
    }
    return res;
}
function InsertRes(begin, end, res) {
    var temp = [];
    for (var i = begin; i <= end; i++) {
        temp.push(i);
    }
    res.push(temp);
}