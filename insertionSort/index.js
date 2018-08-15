function insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i]
        var preIndex = i - 1
        while (arr[preIndex] > temp) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex -= 1
        }
        arr[preIndex + 1] = temp
    }
    return arr
}