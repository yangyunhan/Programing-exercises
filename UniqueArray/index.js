//v1 时间复杂度O(n^2)
function unique(arr) {
    var res = []
    for (var i = 0, len = arr.length; i < len; i++) {
        var item = arr[i]
        for (var j = 0, jlen = res.length; j < jlen; j++) {
            if (item === res[j]) {
                break
            }
        }
        if (j === jlen) {
            res.push(item)
        }
    }
    return res
}
var a = [1, 1, '1', '2', 1]
unique(a)

//v2 唯一的数组中每个数的索引应该也是唯一的 时间复杂度O(n^2)
function unique(arr) {
    return arr.filter(function (ele, index, array) {
        return array.indexOf(ele) === index
    })
}

//v3 创建一个对象，时间复杂度O(n)
function unique(arr) {
    var res = {}
    return arr.filter(function (ele, index, array) {
        return res.hasOwnProperty(typeof ele + ele) ? false : res[typeof ele + ele] = true
    })
}

function unique(arr) {
    var res = {}
    return arr.filter(function (ele, index, array) {
        return res[typeof ele + ele] ? false : res[typeof ele + ele] = true
    })
}

//v4 es6 set
const unique = a => [...new Set(a)]

//v5 es6 set Array.from(set转换为数组)
function dedupe(array) {
    return Array.from(new Set(array));
}

dedupe([1, 1, 2, 3])