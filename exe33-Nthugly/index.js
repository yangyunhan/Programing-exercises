/**
 * 思路：
 * 首先从丑数的定义我们知道，一个丑数的因子只有2,3,5，那么丑数p = 2 ^ x * 3 ^ y * 5 ^ z，
 * 换句话说一个丑数一定由另一个丑数乘以2或者乘以3或者乘以5得到，
 * 那么我们从1开始乘以2,3,5，就得到2,3,5三个丑数，在从这三个丑数出发乘以2,3,5就得到4，6,10,6，9,15,10,15,25九个丑数，
 * 我们发现这种方法会得到重复的丑数，而且我们题目要求第N个丑数，这样的方法得到的丑数也是无序的。
 * 那么我们可以维护三个队列：
 * （1）丑数数组： 1
 * 乘以2的队列：2
 * 乘以3的队列：3
 * 乘以5的队列：5
 * 选择三个队列头最小的数2加入丑数数组，同时将该最小的数乘以2,3,5放入三个队列；
 * （2）丑数数组：1,2
 * 乘以2的队列：4
 * 乘以3的队列：3，6
 * 乘以5的队列：5，10
 * 选择三个队列头最小的数3加入丑数数组，同时将该最小的数乘以2,3,5放入三个队列；
 * @param {Number} index 
 */
function GetUglyNumber_Solution(index) {
    if (index < 7) return index;
    var p2 = 0, p3 = 0, p5 = 0, newNum = 1;
    var arr = [];
    arr.push(newNum);
    while (arr.length < index) {
        newNum = Math.min(arr[p2] * 2, arr[p3] * 3, arr[p5] * 5);
        if (arr[p2] * 2 == newNum) p2++;
        if (arr[p3] * 3 == newNum) p3++;
        if (arr[p5] * 5 == newNum) p5++;
        arr.push(newNum);
    }
    return newNum;
}