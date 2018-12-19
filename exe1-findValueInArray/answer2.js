function Find(target, array) {
    var rowLen = array.length;
    var colLen = array[0].length;
    var i = rowLen - 1;
    var j = 0;
    if (rowLen === 0) {
        return false
    }
    if (target < array[0][0] || target > array[rowLen - 1][colLen - 1]) {
        return false
    }
    for (; i >= 0, j < colLen;) {
        if (target === array[i][j]) {
            return true
        }
        if (target > array[i][j]) {
            j++
            continue
        }
        if (target < array[i][j]) {
            i--
            continue
        }
    }
    return false
}
