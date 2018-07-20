/**
 * 思路：二叉搜索树的后序遍历判断：
 * 1、首先明白二叉搜索树的特点，左节点小于根，右节点大于根，左右子树也同样是二叉搜索树
 * 2、根据二叉搜索树的特点，我们发现需要递归的判断，根节点肯定在数组的末尾
 * 3、找出比根节点小的就是左子树，找到比根节点大的就是右子树
 * 4、如果左右子树中有不满足的条件的元素则返回或者结束判断
 * 5、直到所有元素都判断完则满足二叉搜索树的特点，或者中途返回
 * @param {Object} sequence 
 */
function VerifySquenceOfBST(sequence) {
    if (sequence.length === 0) return false
    return judge(sequence, 0, sequence.length - 1)
}
function judge(a = [], l, r) {
    if (l >= r) return true
    let i = r
    while (i > l && a[i - 1] > a[r])--i
    for (let j = i - 1; j >= l; --j) {
        if (a[j] > a[r]) return false
    }
    return judge(a, 1, i - 1) && judge(a, i, r - 1)
}

/**
 * 思路：以[4, 8, 6, 12, 16, 14, 10]为例，
 * 首先最右边的元素10为根，然后从后往前找到大于根的一个连续序列[12, 16, 14]（即右子树），
 * 为了区分左右子树，这个查找过程是必须的。
 * 但没必要遍历左子树，因为我们可以在递归函数中加一个参数来记录根的值，以限制左子树部分的上限，这样每次可以减少一半的遍历。
 * 为什么不用限制它的右子树的下限呢？因为我们在上述找右子树的过程中已经保证了右子树中的结点都大于根。
 */
function VerifySquenceOfBST(sequence) {
    if (sequence == null || sequence.length == 0) {
        return false;
    }
    return valid(sequence, 0, sequence.length - 1, 0x7fffffff);
}
function valid(sequence, start, end, max) {
    if (start > end) return true;
    var root = sequence[end];
    if (root > max) return false;
    for (var i = end; i - 1 >= start && sequence[i - 1] > root; i--) ;
    return valid(sequence, start, i - 1, root) && valid(sequence, i, end - 1, max);
}