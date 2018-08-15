function binarySearch(target, arr, start, end) {
    var start = start || 0
    var end = end || arr.length - 1
    var mid = parseInt(start + (start + end) / 2, 10)
    if (arr[mid] === target) {
        return mid
    } else if (arr[mid] > target) {
        return binarySearch(target, arr, start, mid - 1)
    } else if (arr[mid] < target) {
        return binarySearch(target, arr, mid + 1, end)
    }
    return -1
}
function binarySearch(target, arr, start, end) {
    var start = start || 0
    var end = end || arr.length - 1
    var mid = parseInt(start + (start + end) / 2, 10)
    while (start < end) {
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] > target) {
            end = mid - 1
        } else if (arr[mid] < target) {
            start = mid + 1
        }
    }
    return -1
}
//无序数组的二分查找，返回true／false
function countBinarySearch(target, arr) {
    while (arr.length > 0) {
        var pivot = arr[0]
        var left = [], right = []
        for (var i = 0; i < arr.length; i++){
            arr[i] > pivot ? right.push(arr[i]) : left.push(arr[i])
        }
        if(pivot === target){
            return true
        }else if(pivot > target){
            arr = left
        }else{
            arr = right
        }
    }
    return false
}
