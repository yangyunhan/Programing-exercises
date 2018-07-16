/**
 * 思路：两个指针，一个负责遍历，一个负责找到正确的节点
 * 找到正确的节点靠递增索引。例如长度为5的链表，找倒数第2个节点。
 * 索引是0-4，在索引大于等于2时，找节点第指针需要向后移动。
 * 所以，倒数第二个节点实际上是链表正向移动了3次到第四个节点。
 * @param {Function} head 
 * @param {Number} k 
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
    var p = q = head;
    for (var i = 0; p != null; i++) {
        if (i >= k)
            q = q.next;
        p = p.next;
    }
    return i < k ? null : q;
}

/**
 * 思路：
 * 定义快指针和慢指针。
 * 快指针先走 k-1 步，到达第 k 个节点。
 * 然后两指针同时齐步走，当快指针到达末尾时，慢指针在倒数第 k 个节点上。
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
    if (head == null || k <= 0) {
        return null
    }
    var p = head, pre = head, a = k, count = 0
    while (p != null) {
        p = p.next;
        count++;
        if (k < 1) {
            pre = pre.next;
        }
        k--;
    }
    if (count < a) {
        return null
    }
    return pre;
}