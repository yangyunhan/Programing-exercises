//正确但是很慢，在牛客网上不能通过
/**
 * 每一次循环都执行当前值的两个函数计算（分出两个调用帧），后面计算会有很多重复
 * 比如n=7
 * 要计算n=6\n=5\n=5\n=4\n=4\n=3\n=4\n=3\n=3\n=2\n=3\n=2\n=2\n=1\n=3\n=2\n=2\n=1\n=2\n=1\n=1\n=0...
 * @param {number} n 
 */
function Fibonacci(n) {
    if (n == 0) {
        return 0
    } else if (n == 1 || n == 2) {
        return 1
    } else {
        return Fibonacci(n - 1) + Fibonacci(n - 2)
    }
}

//尾递归
/**
 * 尾调用自身称为尾递归，只存在一个调用帧
 * 在传递参数的位置直接进行递增，而不通过函数，把用到的内部变量变成函数的参数
 * http://es6.ruanyifeng.com/#docs/function#%E5%B0%BE%E8%B0%83%E7%94%A8%E4%BC%98%E5%8C%96
 * n=7
 * n=6\n=5\n=4\n=3\n=2\n=1
 * @param {number} n 
 * @param {number} ac1 
 * @param {number} ac2 
 */
function tailFibonacci(n, ac1, ac2) {
    if (n == 0) { return 0 }
    if (n == 1 || n == 2) { return 'ac2' };
    return tailFibonacci((n - 1).toString(), ac2.toString(), sumStrings(ac1.toString() + ac2.toString()));
}
function Fibonacci(n) {
    return tailFibonacci(n.toString(), '1', '1');
}

var cache = {
    0: 0,
    1: 1
}
function fabonacci(n) {
    return typeof cache[n] === 'number' ? cache[n] : cache[n] = fabonacci(n - 1) + fabonacci(n - 2);
}
function tailFibonacci(n, ac1, ac2) {
    if (n == 0) { return 0 }
    if (n == 1 || n == 2) { return ac2 };
    return tailFibonacci(n - 1, ac2, ac1 + ac2);
}
function Fibonacci(n) {
    return tailFibonacci(n + 2, 1, 1);
}

//generator
function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (; ;) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}
function fibonacciSolution(m) {
    for (let n of fibonacci()) {
        if (n > m) break;
        console.log(n);
    }
}

//柯里化
/**
 * 将多参数的函数转为单参数的函数
 * 与尾调用一起成为函数式编程（尾调用就是某个函数的最后一步是调用另一个函数）
 * @param {Function} fn 
 * @param {Number} n1 
 * @param {Number} n2 
 */
function currying(fn, n1, n2) {
    return function (m) {
        return fn.call(this, m, n1, n2);
    };
}
function tailFibonacci(n, ac1, ac2) {
    if (n == 0) { return 0; }
    if (n == 1 || n == 2) { return ac2 };
    return tailFibonacci(n - 1, ac2, ac1 + ac2);
}
function Fibonacci(n) {
    return currying(tailFibonacci, 1, 1)(n);
}

/**
 * 用es6的函数默认值改写更加简单
 */
function Fibonacci(n, ac1 = 1, ac2 = 1) {
    if (n == 0) return 0
    if (n == 1 || n == 2) return ac2
    return Fibonacci(n - 1, ac2, ac1 + ac2)
}
Fibonacci(5)

/**
 * 尾递归优化实现：将递归变循环
 */
function tco(f) {
    let value
    let active = false
    let accumulated = []
    return function accumulator() {
        accumulated.push(arguments)
        if (!active) {
            active = true
            while (accumulated.length) {
                value = f.apply(this, accumulated.shift())
            }
            active = false
            return value
        }
    }
}

function sum(x, y) {
    if (y > 0) {
        return sum(x + 1, y - 1);
    } else {
        return x;
    }
}

sum(1, 100000)
// Uncaught RangeError: Maximum call stack size exceeded(…)

let sum = tco(function sum(x, y) {
    if (y > 0) {
        return sum(x + 1, y - 1);
    } else {
        return x;
    }
})

sum(1, 100000)
// 100001