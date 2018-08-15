/**
 * 思路：来合适数量的桶，循环数组，根据规则将每个数字放到应该属于的桶内，利用桶自身的排序，连接每个桶里的数值为排序结果。
 * 1. 定义长度、用来计数的n、步长、初始化结果数组、桶数组、最大／最小元素
 * 2。调整桶的个数，规则是长度至少是桶个数的2倍，否则个数递减
 * 3. 确定步长，根据桶的个数
 * 4. 循环开始：
 *      1、确定该元素应该属于哪个桶，根据步长
 *      2、该桶里没有值，初始化数组，往桶里丢数值。
 *      3、该桶里已经有值，插入排序该数值。
 * 5. 循环每个桶：把桶里的数值连接到数组中
 * @param {Array} array 
 * @param {Number} num 
 */
function bucketSort(array, num) {
    if (array.length <= 1) return array
    var result = [], bucket = [], len = array.length, min = max = array[0], space, n = 0
    var index = Math.floor(len / num)
    while (index < 2) {
        num--
        index = Math.floor(len / num)
    }
    for (var i = 1; i < len; i++) {
        min = array[i] <= min ? array[i] : min
        max = array[i] >= max ? array[i] : max
    }
    space = (max - min + 1) / num
    console.time('桶排序耗时')
    for (var j = 0; j < len; j++) {
        var index = Math.floor((array[j] - min) / space)
        if (bucket[index]) {
            var indexLen = bucket[index].length - 1
            while (indexLen >= 0 && array[j] < bucket[index][indexLen]) {
                bucket[index][indexLen + 1] = bucket[index][indexLen]
                indexLen--
            }
            bucket[index][indexLen + 1] = array[j]
        } else {
            bucket[index] = []
            bucket[index].push(array[j])
        }
    }
    /* while(n < num){
        result = result.concat(bucket[n])
        n++
    } */
    for(var i = 0; i< num; i++){
        if(bucket[i].length){
            result = result.concat(bucket[i])
        }
    }
    console.timeEnd('桶排序耗时')
    return result
}
console.log(bucketSort([4, 13, 8, 23, 17, 28], 4))