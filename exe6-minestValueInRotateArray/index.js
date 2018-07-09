//复杂度为O(n^2)
function minNumberInRotateArray(rotateArray) {
    if (rotateArray.length === 0) {
        return 0
    } else {
        for (var i = 1; i < rotateArray.length; i++) {
            if (rotateArray[i] < rotateArray[i - 1]) {
                return rotateArray[i]
            }
        }
        return rotateArray[0]
    }
}

/**
 * Math.max | Math.min 是内置函数，可以求出参数中最大、最小值，对数字组成的数组是不能用的
 * 如果要求数组中最大、最小值，则可以用Function.prototype.apply()来调用
 * var number = [1,2,3,4]
 * Math.max.apply(null, number)
 * 再利用es5的展开运算符
 * Math.max.apply(null, ...number)
 */
function minNumberInRotateArray(rotateArray) {
    var min = Math.min.apply(this, rotateArray);
    var index = rotateArray.indexOf(min);
    var length = rotateArray.length;
    if (length == 0) {
        return 0;
    }

    return rotateArray[index];
}

//时间复杂度O(log(n))
/**
 * 在牛客网的编程环境会超时
 * 
 * 采用二分法解答这个问题，
 * mid = low + (high - low)/2
 * 需要考虑几种情况：
（1）长度为0，返回0
（2）左边小于右边，说明没有旋转，递增数组或者只有两个值，都取第一个值
（3）只有两个值，存在旋转，取第二个值
（4）不完全递增，部分数值相等，两边比中间大，只能一个个查找
（5）中间的值大于左边的值，最小值在右部分
（6）右边的值大于中间的值，最小值在左部分
 */
function minNumberInRotateArray(rotateArray)  {
    var length_vector = rotateArray.length
    //如果没有值
    if (length_vector == 0) return 0 
    var low = 0, high = length_vector - 1;
    while (low < high) {
        //如果左边小于右边，数组递增，取第一个值
        if (rotateArray[low] < rotateArray[high]) return rotateArray[low];
        //如果只有两个值，存在旋转，取后面的值
        if (high == low + 1) return rotateArray[high];
        var  mid = (high + low) / 2;
        //不完全递增，部分数组相等，两边比中间大，只能一个个查找
        if (rotateArray[low] >= rotateArray[mid] &&  rotateArray[high] >= rotateArray[mid]) {
            var  index = low;
            for  (var  i = low + 1; i <= high; i++) {
                if  (rotateArray[index] > rotateArray[i])
                    index = i;
            }
            return  rotateArray[index];
        }
        //如果中间大于左边，最小在右边
        if (rotateArray[low] <= rotateArray[mid])
            low = mid;
        //如果右边大于中间，最小在左边
        else  if  (rotateArray[high] >= rotateArray[mid])
            high = mid;
    }
    return  0;
}