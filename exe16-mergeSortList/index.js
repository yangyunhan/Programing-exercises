/**
 * 思路：观察每一次处理，都是比较两个链表当前节点的值的大小，看情况分析下一次要进行比较的两个值
 * 递归
 * @param {Object} pHead1 
 * @param {Object} pHead2 
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2) {
    // write code here
    if (pHead1 == null) {
        return pHead2
    }
    if (pHead2 == null) {
        return pHead1
    }
    if (pHead1.val <= pHead2.val) {
        pHead1.next = Merge(pHead1.next, pHead2)
        return pHead1
    } else {
        pHead2.next = Merge(pHead1, pHead2.next)
        return pHead2
    }
}

/**
 * 思路：新建一个链表保存合并之后的结果，考虑到三种情况：
 * 1.两者之一为空，直接返回另一个
 * 2.两者比较大小进行合并，每次把小的合并到目标中
 * 3.一个的尾节点小于另一个的头节点，直接在最后拼接
 */
/*function ListNode(x) {
    this.val = x;
    this.next = null;
}*/
function Merge(list1, list2) {
    if (list1 == null) {
        return list2;
    }
    if (list2 == null) {
        return list1;
    }
    var mergeHead = ListNode(null);
    var current = ListNode(null);
    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            if (mergeHead == null) {
                mergeHead = current = list1;
            } else {
                current.next = list1;
                current = current.next;
            }
            list1 = list1.next;
        } else {
            if (mergeHead == null) {
                mergeHead = current = list2;
            } else {
                current.next = list2;
                current = current.next;
            }
            list2 = list2.next;
        }
    }
    if (list1 == null) {
        current.next = list2;
    } else {
        current.next = list1;
    }
    return mergeHead;
}