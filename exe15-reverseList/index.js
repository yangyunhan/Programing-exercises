/**
 * 思路：先保存下一个节点，再断开之前两个节点的连接指向前面的节点
 * 更新前一个节点和后一个节点
 * @param {Function} pHead 
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    if (pHead == null)
        return null;
    var pre = ListNode(null);
    var next = ListNode(null);
    while (pHead != null) {
        next = pHead.next;
        pHead.next = pre;
        pre = pHead;
        pHead = next;
    }
    return pre;
}

/**
 * 思路：递归
 * 每一次都将下一个节点的下一个指针指向当前节点，并将当前节点的next置为空
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(head){
    if(head == null || head.next == null) {
        return head;
    }
    var preNode = ReverseList(head.next);
    head.next.next = head;
    head.next = null;
    return preNode;
}