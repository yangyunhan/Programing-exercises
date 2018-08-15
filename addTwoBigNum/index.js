function add(a, b) {
    var aLen = a.toString()
    var bLen = b.toString()
    var carry = 0, result = [], len = Math.max(aLen.length, bLen.length), i = len
    while (i--) {
        var sum = (+aLen[i - len + aLen.length] | 0) + (+bLen[i - len + bLen.length] | 0) + carry
        var chu = sum / 10
        carry = parseInt('' + chu)
        result.unshift(sum % 10)
    }
    if(carry) result.unshift(carry)
    return result.join('')
}