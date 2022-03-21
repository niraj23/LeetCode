/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let outputList = new ListNode();
    let selectedNode = outputList;
    let tempNode;
    while (true) {
        if (list1 && list2 && list1.val <= list2.val || list1 && list2 == undefined) {
            selectedNode.next = list1;
            list1 = list1.next;
        } else if (list1 && list2 || list2 && list1 == undefined) {
            selectedNode.next = list2;
            list2 = list2.next;
        } else {
            break;
        }
        selectedNode = selectedNode.next;
    }
    return outputList.next;
};