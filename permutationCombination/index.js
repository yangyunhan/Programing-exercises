function queue(arr, size) {
    if (size > arr.length) { return; }
    var allResult = [];
    (function (arr, size, result) {
        if (result.length == size) {
            allResult.push(result);
            /* console.log('allResult添加', allResult)
            console.log('---------------') */
        } else {
            for (var i = 0, len = arr.length; i < len; i++) {
                /* console.log('i', i)
                console.log('当前newArr', [].concat(arr)) */
                var newArr = [].concat(arr),
                    curItem = newArr.splice(i, 1);
                /* console.log('curItem', curItem)
                console.log('下次循环的arr ', newArr)
                console.log('下次循环的size', size)
                console.log('下次循环的result', [].concat(result, curItem)) */
                arguments.callee(newArr, size, [].concat(result, curItem));
            }
        }
    })(arr, size, []);
    console.log('匿名函数return前')
    return allResult;
}
queue(['a', 'a', 'z', 'z'], 4)
function choose(arr, size) {
    var allResult = [];
    (function (arr, size, result) {
        var arrLen = arr.length;
        if (size > arrLen) {
            return;
        }
        if (size == arrLen) {
            allResult.push([].concat(result, arr))
        } else {
            for (var i = 0; i < arrLen; i++) {
                var newResult = [].concat(result);
                newResult.push(arr[i]);
                if (size == 1) {
                    allResult.push(newResult);
                } else {
                    var newArr = [].concat(arr);
                    newArr.splice(0, i + 1);
                    arguments.callee(newArr, size - 1, newResult);
                }
            }
        }
    })(arr, size, []);
    return allResult;
}
function showResult(result) {
    console.log('The number of result sets: ' + result.length);
    for (var i = 0, len = result.length; i < len; i++) {
        console.log(result[i]);
    }
}
var arr = ['姬光', '王子', '三桂', '科长'];
showResult(choose(arr, 4));
showResult(queue(arr, 4));

function P(arr, num) {
    var r = [];
    (function f(t, a, n) {
        if (n == 0) {
            return r.push(t);
        }
        for (var i = 0, l = a.length; i < l; i++) {
            f(t.concat(a[i]), a.slice(0, i).concat(a.slice(i + 1)), n - 1);
        }
    })([], arr, num);
    return r;
}
P(['a', 'b', 'c'], 3)
P(['a', 'a', 'z'],3)
P(['a', 'a', 'z', 'z'], 4)
P(['a', 'z'], 2)