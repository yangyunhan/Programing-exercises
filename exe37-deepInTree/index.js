/**
 * 思路：递归思想
 * @param {Function} pRoot 
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot) {
    if (pRoot == null) {
        return 0;
    }
    var left = TreeDepth(pRoot.left);
    var right = TreeDepth(pRoot.right);
    return Math.max(left, right) + 1;
}