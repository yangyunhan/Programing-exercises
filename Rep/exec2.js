//数字格式化问题，123456789 --> 1,234,567,890
//非正则实现
let test = '123456789'
function formatCash(str) {
    let arr = []
    for (let i = 1; i < str.length; i++) {
        if (str.length % 3 && i === 1) {
            arr.push(str.substr(0, str.length % 3))
        }
        if (i % 3 === 0) {
            arr.push(str.substr(i - 2, 3))
        }
    }
    return arr.join(',')
}

//正则实现
let test1 = '1234567890'
let format = test1.replace(/B(?=(\d{3})+(?!\d))/g, ',')