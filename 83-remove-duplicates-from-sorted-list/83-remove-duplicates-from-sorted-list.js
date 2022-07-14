/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let newHead = new ListNode(-101);
    newHead.next = head;
    let cur = newHead;
    while (cur && cur.next) {
        if (cur.next.val == cur.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return newHead.next;
};