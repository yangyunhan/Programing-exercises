/**
 * 思路：
 * @param {Function} pHead1 
 * @param {Function} pHead2 
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
    var len1 = listLength(pHead1)
    var len2 = listLength(pHead2)
    if(len1 > len2){
        pHead1 = walkStep(pHead1, len1 - len2)
    }else{
        pHead2 = walkStep(pHead2, len2 - len1)
    }
    while(pHead1 !== null){
        if(pHead1 === pHead2) return pHead1
        pHead1 = pHead1.next
        pHead2 = pHead2.next
    }
    return null
}
function listLength(pHead) {
    if (pHead === null) return 0
    var sum = 1
    while (pHead = pHead.next) sum++ 
    return sum
}
function walkStep(pHead, step){
    while(step--){
        pHead = pHead.next
    }
    return pHead
}