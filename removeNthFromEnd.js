/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function show(node) {
  while (node) {
    console.log(node.val);
    node = node.next;
  }
}
var removeNthFromEnd = function (head, n) {
  let newLinkedList = new ListNode(0);
  newLinkedList.next = head;

  let leftTemp = newLinkedList;
  let rightTemp = newLinkedList;

  for (let i = 0; i <= n ; i++) {
    rightTemp = rightTemp.next;
  }
  while (rightTemp != null) {
    rightTemp = rightTemp.next;
    leftTemp = leftTemp.next;
  }
  leftTemp.next = leftTemp.next.next;
  return newLinkedList.next;
};
let n6 = new ListNode(9, null);
let n5 = new ListNode(5, n6);
let n4 = new ListNode(0, n5);
let n3 = new ListNode(2, n4);
let n2 = new ListNode(4, n3);
let n1 = new ListNode(1, n2);
let header = new ListNode(9, n1);
let l1 = header;

let node = removeNthFromEnd(l1, 3);
show(node);
