var data = { 'name': 'yyh', 'age': 20 }
function solutionOne(data) {
    let hashStr = [];
    for (let [key, val] of Object.entries(data)) {
        if (typeof val !== 'undefined' && val !== '') {
            hashStr.push(`${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
        }
    }
    return hashStr.join('&')
}

function solutionTwo(data) {
    const keys = Object.keys(data)
    const keysLen = keys.length
    return keys.reduce((pre, cur, index) => {
        const value = data[cur]
        const flag = index !== keysLen - 1 ? '&' : ''
        return `${pre}${cur}=${value}${flag}`
    }, '')
}
