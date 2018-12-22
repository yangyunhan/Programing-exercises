var tree = {
    value: 5,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 1,
            left: {
                value: 7
            },
            right: {
                value: 8
            }
        },
        right: {
            value: 6
        }
    }
}
var pruneTree = function (root) {
    if (!root) return null
    root.left = pruneTree(root.left)
    root.right = pruneTree(root.right)
    if (root.value == 1) {
        console.log('jian')
        return null
    } else {
        return root
    }
}
var result = pruneTree(tree)