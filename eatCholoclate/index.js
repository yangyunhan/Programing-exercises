var n = 3, m = 8;
//计算第一天吃s个巧克力一共需要多少个多少个巧克力
function sum(s) {
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum += s;
        s = (s + 1) >> 1;
    }
    return sum;
}
//二分查找
function fun() {
    if (n == 1) return m;
    var low = 1;
    var high = m;
    while (low < high) {
        var mid = (low + high + 1) >> 1;
        if (sum(mid) == m) return mid;
        else if (sum(mid) < m) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return high;
}
var res = fun()
console.log(res)