var str = 'alibaba'
var strArr = str.split('')
var result = []
for (var i = 0; i < strArr.length; i++) {
    for (var j = i + 1; j < strArr.length; j++) {
        if (strArr[i] === strArr[j]) {
            j = ++i//相当于退出了这一层for循环，result的增加方法不会被执行，只有没有重复的值才会执行到
        }
    }
    result.push(strArr[i])
}
//评价算法复杂度是n^2

var str = 'alibaba'
var strArr = str.split('')
var len = strArr.length
for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
        if (strArr[i] === str[j]) {
            strArr.splice(j, 1)
            len--
            j--
        }
    }
}
//评价算法复杂度n^2

var str = 'alibaba'
var strArr = str.split('')
var len = strArr.length
var result = {}
var resultArr = []
for (var i = 0; i < len; i++) {
    if(!result[strArr[i]]){
        result[strArr[i]] = 1
        resultArr.push(strArr[i]);
    }
}
//评价算法复杂度n

var str = 'alibaba'
Array.from(new Set(str.split('')))

