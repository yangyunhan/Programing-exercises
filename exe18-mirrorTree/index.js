/**
 * 思路：递归
 * 交换左右子树，对左子树做相同操作，对右子树做相同操作
 * @param {Object} root 
 */
/*function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}*/
function Mirror(root)
{
    if(root==null) {
        return;
    }
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    Mirror(root.left);
    Mirror(root.right);
    return root;
}