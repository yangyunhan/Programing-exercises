/**
 * 思路：分析每个位置上的出现1的规律
 * 参考链接：http://www.cnblogs.com/nailperry/p/4752987.html
 * @param {Number} n 
 */
function NumberOf1Between1AndN_Solution(n) {
    var ones = 0;
    for (var m = 1; m <= n; m *= 10) {
        var a = Math.floor(n / m), b = n % m;
        if (a % 10 == 0)
            ones += Math.floor(a / 10) * m;
        else if (a % 10 == 1)
            ones += Math.floor(a / 10) * m + (b + 1);
        else
            ones += (Math.floor(a / 10) + 1) * m;
    }
    return ones;
}

function NumberOf1Between1AndN_Solution(n) {
    var count = 0;//1的个数
    var i = 1;//当前位
    var current = 0, after = 0, before = 0;
    while (Math.floor(n / i) != 0) {
        current = Math.floor(n / i) % 10; //高位数字
        before = Math.floor(n / (i * 10)); //当前位数字
        after = n - Math.floor(n / i) * i; //低位数字
        //如果为0,出现1的次数由高位决定,等于高位数字 * 当前位数
        if (current == 0)
            count += before * i;
        //如果为1,出现1的次数由高位和低位决定,高位*当前位+低位+1
        else if (current == 1)
            count += before * i + after + 1;
        //如果大于1,出现1的次数由高位决定,//（高位数字+1）* 当前位数
        else {
            count += (before + 1) * i;
        }
        //前移一位
        i = i * 10;
    }
    return count;
}