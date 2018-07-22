/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber) {
    if (root === null) return []
    var result = []
    function FindPathMain(root, path, currentSum) {
        currentSum += root.val
        path.push(root)
        var isLeaf = root.left === null && root.right === null
        if (currentSum === expectNumber && isLeaf) {
            var onePath = []
            for (node of path) {
                onePath.push(node.val)
            }
            result.push(onePath)
        }
        if (currentSum < expectNumber) {
            if (root.left) FindPathMain(root.left, path, currentSum)
            if (root.right) FindPathMain(root.right, path, currentSum)
        }
        path.pop()
    }
    FindPathMain(root, [], 0)
    return result
}