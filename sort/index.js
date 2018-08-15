function swap(arr, indexA, indexB) {
    [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
}
function bubbleSort(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                console.log('change position ', j, j + 1)
            }
        }
    }
    return arr
}

function bubbleSort2(arr) {
    var i = arr.length - 1
    while (i > 0) {
        var pos = 0
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j
                swap(arr, j, j + 1)
                console.log('change position', j, j + 1)
            }
        }
        i = pos
        console.log(pos)
    }
    return arr
}

function bubbleSort3(arr) {
    var start = 0
    var end = arr.length - 1
    while (start < end) {
        for (var i = start; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1)
            }
        }
        end -= 1
        for (var i = end; i > start; i--) {
            if (arr[i - 1] > arr[i]) {
                swap(arr, i - 1, i)
            }
        }
        start += 1
    }
    return arr
}

function bubbleSort4(arr) {
    var start = 0, end = arr.length - 1
    while (start < end) {
        var endPos = 0, startPos = 0
        for (var i = start; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
                endPos = i
                swap(arr, i, i + 1)
            }
        }
        end = endPos
        for (var i = end; i > start; i--) {
            if (arr[i - 1] > arr[i]) {
                startPos = i
                swap(arr, i - 1, i)
            }
        }
        start = startPos
    }
    return arr
}

function bubbleSort(arr, func) {
    for (var i = arr.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (func(arr[j], arr[j + 1]) > 0) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}