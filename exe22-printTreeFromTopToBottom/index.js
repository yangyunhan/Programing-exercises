/**
 * 思路：广度优先遍历二叉树，借助队列；深度优先遍历则借助堆栈
 * @param {Object} root 
 */
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function PrintFromTopToBottom(root) {
    var list = [];
    var queue = [];
    if (root == null) {
        return list;
    }
    queue.push(root);
    while (queue.length != 0) {
        var temp = queue.shift();
        if (temp.left != null) {
            queue.push(temp.left);
        }
        if (temp.right != null) {
            queue.push(temp.right);
        }
        list.push(temp.val);
    }
    return list;
}