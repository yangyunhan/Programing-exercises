let arr = [1, 2, 3, 4, 5]
function sum(array) {
    let x = 0;
    for (let i = 0; i < array.length; i++) {
        x = x + array[i]
    }
    return x
}

function sum(array) {
    //return array.reduce((a, b) => { return (a + b) })
    return array.reduce((a, b) => a + b)
}

//reduce扩展
//res当作是最后处理得到的样式，记得赋初始值，cur是当前项
var arrString = 'abcdaabc';
arrString.split('').reduce(function(res, cur) {
    res[cur] ? res[cur] ++ : res[cur] = 1
    return res;
}, {})