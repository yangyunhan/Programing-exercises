/**
 * 
 * @param {Number} r 
 */
var lines = readline().split(' ')
var l = lines[0]
var r = lines[1]
function numbersCanBeDividedBy3(r) {
    var res = 0
    if (r % 3 === 0) {
        res = Math.floor(r / 3) * 2
    } else {
        res = Math.floor(r / 3) * 2 + r % 3 - 1
    }
    return res
}
numbersCanBeDividedBy3(r) - numbersCanBeDividedBy3(l - 1)