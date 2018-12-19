function Find(target, array) {
    var len = array.length;
    for (var i = 0; i < len; i++) {
        var thisLen = array[i].length;
        var min = 0;
        var max = thisLen - 1;
        if (target < array[i][min]) {
            return false
        } else if (target > array[i][max]) {
            continue
        } else {
            var mid = Math.floor((min + max) / 2);
            while (min < max) {
                if (target < array[i][mid]) {
                    max = mid - 1;
                } else if (target > array[i][mid]) {
                    min = mid + 1;
                } else if (target === array[i][mid]) {
                    return true
                } else if (target !== array[i][mid] && i < len - 1) {
                    continue
                } else if (target !== array[i][mid] && i === len - 1) {
                    return false
                }
            }
        }
    }
}
