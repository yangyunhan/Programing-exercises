function without(items) {
    var filterArr = Array.prototype.slice.call(arguments, 1)
    for (var i = 0; i < filterArr.length; i++) {
        for (var j = 0; j < items.length; j++) {
            if (items[j] === filterArr[i]) {
                items.splice(j, 1)
                j--
            }
        }
    }
    console.log(items)
    return items
}
without([1, 1], 1)
without([1, 2, 2, 3, false], 1, 2, 5, false)