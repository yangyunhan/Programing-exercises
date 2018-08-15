var line = readline().split(" ");
var n = parseInt(line[0]);
var k = parseInt(line[1]);

function numPairs(n, k) {
    var result = []
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            if (x % y >= k) {
                result.push([x, y])
            }
        }
    }
    return result.length
}

function main(n, k) {
    var res = 0;
    if (k === 0) {
        res = n * n;
    } else {
        //余数大于k，则除数也就是y要大于k，而余数是从0到y-1循环的
        for (var y = k + 1; y <= n; y++) {
            //对于每个y值，因为x要去除y，x从1到n包含n/y个余数循环,
            //每个余数循环中只有y-k个符合条件的。因为y>k
            res += (Math.floor(n / y)) * (y - k);
            if (n % y >= k) {  //>=k表示还有不完整余数循环，余数为该循环的数字个数
                res += n % y - k + 1;
            }
        }
    }
    print(res)
}
main(n, k)