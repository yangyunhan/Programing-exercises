/**
 * 思路：迭代
 * 如果两个树都为空，则返回null
 * 如果两个树的值相等，则构造函数判断第一个树是否包含第二个树
 * 如果两个树的值不相等，则判断该树的左子树是否等于第二个树
 * 如果还不相等，则判断该树的右子树是否等于第二个树
 * @param {Object} pRoot1 
 * @param {Object} pRoot2 
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
    var result = false
    if (pRoot1 === null || pRoot2 === null) return false
    if (pRoot1.val === pRoot2.val) {
        result = doesTree1HaveTree2(pRoot1, pRoot2)
    }
    if (!result) {
        result = HasSubtree(pRoot1.left, pRoot2)
    }
    if (!result) {
        result = HasSubtree(pRoot1.right, pRoot2)
    }
    return result
}
function doesTree1HaveTree2(node1, node2) {
    if (node2 === null) return true;
    if (node1 === null) return false;
    if (node1.val !== node2.val) return false;
    return doesTree1HaveTree2(node1.left, node2.left) && doesTree1HaveTree2(node1.right, node2.right);
}

/**
 * 思路：迭代 + 短路特性
 * 代码看起来更加工整，但是doesTree1HaveTree2至少会被执行一次
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
    var result = false
    if (pRoot1 === null || pRoot2 === null) return false
    return doesTree1HaveTree2(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2)
}
function doesTree1HaveTree2(node1, node2) {
    if (node2 === null) return true
    if (node1 === null) return false
    if (node1.val !== node2.val) return false
    return doesTree1HaveTree2(node1.left, node2.left) && doesTree1HaveTree2(node1.right, node2.right);

}
/**
 * 思路：可以看到上面两个函数的差别在于node2在判断包含的时候得到为空的结果不一样。
 * 所以如果想用同一个函数做迭代，需要一个变量判断状态。
 */
function HasSubtree(p1, p2, flag) {
    var f = HasSubtree;
    if (flag && !p2) return true;
    if (!p1 || !p2) return false;
    if (p1 && p2 && p1.val === p2.val)
        return f(p1.left, p2.left, true) && f(p1.right, p2.right, true) || f(p1.left, p2) || f(p1.right, p2);
    return f(p1.left, p2) || f(p1.right, p2);
}