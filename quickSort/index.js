/**
 * 思路：选择一个基准：将所有小于这个值的数放在左侧，大于这个数的放在右侧。不断比较左侧的数组和右侧的数组。
 * 基准选1/2比较合理，理想状态下可以排除一般的可能性。
 * 1. 求基准的索引
 * 2. 删除数组中基准值
 * 3. 循环数组，建立小于基准的左子树和大于基准的右子树
 * 4. 循环计算左右子树并连接
 * @param {Array} arr 
 */
function quickSort(arr) {
    if (arr.length <= 1) return arr
    var pivotIndex = Math.floor(arr.length/2)
    var pivot = arr.splice(pivotIndex, 1)[0]
    var left = [], right = []
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))
}