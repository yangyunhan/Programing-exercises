var tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
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
//广度遍历
var levelOrderTraversal = function (node) {
    if (!node) {
        throw new Error("Empty Tree");
    }
    var nodes = []
    var que = []
    que.push(node)
    while (que.length !== 0) {
        node = que.shift()
        nodes.push(node)
        console.log(node.value)
        if (node.left) que.push(node.left)
        if (node.right) que.push(node.right)
    }
    return nodes;
}
var result = levelOrderTraversal(tree)
console.log(result);

//深度先序遍历
var preOrderUnRecur = function (node) {
    if (!node) {
        throw new Error('Empty Tree')
    }
    var nodes = []
    var stack = []
    stack.push(node)
    while (stack.length !== 0) {
        node = stack.pop()
        nodes.push(node)
        console.log(node.value)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }
    return nodes;
}
var result = preOrderUnRecur(tree)

//深度中序遍历
var inOrderUnRecur = function (node) {
    if (!node) {
        throw new Error('Empty Tree')
    }
    var stack = []
    var nodes = []
    while (stack.length !== 0 || node) {
        if (node) {
            stack.push(node)
            node = node.left
        } else {
            node = stack.pop()
            console.log(node.value)
            nodes.push(node)
            node = node.right
        }
    }
    return nodes
}
var result = inOrderUnRecur(tree)
//非递归后续遍历
var posOrderUnRecur = function (node) {
    if (!node) {
        throw new Error('Empty Tree')
    }
    var stack = []
    stack.push(node)
    var temp = null
    while (stack.length !== 0) {
        temp = stack[stack.length - 1]
        if (temp.left && node !== temp.left && node !== temp.right) {
            stack.push(temp.left)
        } else if (temp.right && node !== temp.right) {
            stack.push(temp.right)
        } else {
            console.log(stack.pop().value)
            node = temp
        }
    }
}
var result = posOrderUnRecur(tree)
//后序遍历
var postOrder = function(node){
    if(node){
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.value)
    }
}
var result = postOrder(tree);
//中序遍历
var inOrder = function(node){
    if(node){
        inOrder(node.left)
        console.log(node.value)
        inOrder(node.right)
    }
}
var result = inOrder(tree)
//先序遍历
var preOrder = function(node){
    if(node){
        console.log(node.value)
        preOrder(node.left)
        preOrder(node.right)
    }
}
var result = preOrder(tree)