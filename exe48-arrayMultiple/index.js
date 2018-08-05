/**
 * 思路：题目意思是每行除了元素本身，其他元素相乘。分成上下两个三角形，两个循环，将下三角形和上三角形分别连乘
 * @param {Array} A 
 */
function multiply(A) {
    var length = A.length;
    var B = [];
    if (length != 0) {
        B[0] = 1;
        for (var i = 1; i < length; i++) {
            B[i] = B[i - 1] * A[i - 1];
        }
        var temp = 1;
        for (var j = length - 2; j >= 0; j--) {
            temp *= A[j + 1];
            B[j] *= temp;
        }
    }
    return B;
}