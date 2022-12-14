/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let dummyhead = new ListNode();
    
    let current = dummyhead; 
    
    while(l1 != null && l2 != null) {
        if(l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        }else if(l1.val > l2.val) {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    if(l1 === null) current.next = l2;
    else current.next = l1;

    return dummyhead.next;
};
