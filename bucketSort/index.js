function bucketSort(array, num) {
    if (array.length <= 1) return array;
    var len = array.length, buckets = [], result = [], min = max = array[0], space, n = 0;
    var index = Math.floor(len / num);
    while (index < 2) {
        num--;
        index = Math.floor(len / num);
    }
    for (var i = 1; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
    }
    space = (max - min + 1) / num;
    console.time('桶排序耗时')
    for (var j = 0; j < len; j++) {
        var index = Math.floor((array[j] - min) / space);
        if (buckets[index]) {
            var k = buckets[index].length - 1;
            while (k >= 0 && buckets[index][k] > array[j]) {
                buckets[index][k + 1] = buckets[index][k];
                k--;
            }
            buckets[index][k + 1] = array[j];
        } else {
            buckets[index] = [];
            buckets[index].push(array[j]);
        }
    }
    while (n < num) {
        result = result.concat(buckets[n]);
        n++;
    }
    console.timeEnd('桶排序耗时'); 
    return result;
}
var arr = [3, 38, 15, 36, 26, 27, 2, 19];
console.log(bucketSort(arr, 4));