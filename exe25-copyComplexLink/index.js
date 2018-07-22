/**
 * 思路：
 * 1、复制每个节点，如：复制节点A得到A1，将A1插入节点A后面
 * 2、遍历链表，A1->random = A->random->next;
 * 3、将链表拆分成原链表和复制后的链表
 */
function RandomListNode(x) {
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead) {
    if (!pHead) return null
    var currNode = pHead
    while (currNode) {
        var node = new RandomListNode(currNode.label)
        node.next = currNode.next
        currNode.next = node
        currNode = node.next
    }
    currNode = pHead
    while (currNode) {
        node = currNode.next
        if (currNode.random) {
            node.random = currNode.random.next
        }
        currNode = node.next
    }
    var pCloneHead = pHead.next
    var tmp = null
    currNode = pHead
    while (currNode.next) {
        tmp = currNode.next
        currNode.next = tmp.next
        currNode = tmp
    }
    return pCloneHead
}