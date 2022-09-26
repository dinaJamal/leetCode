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
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let node = head;

  let carry = 0;
  while (l1 || l2) {
    let l1Value = l1 ? l1.val : 0;
    let l2Value = l2 ? l2.val : 0;
    let sum = l1Value + l2Value + carry;
    if (sum > 9) carry = 1;
    else carry = 0;
    let newValue = sum % 10;
    node.next = new ListNode(newValue);
    node = node.next;
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (carry) {
    node.next = new ListNode(carry);
    node = node.next;
  }
  return head.next;
};
let n6 = new ListNode(9, null);
let n5 = new ListNode(9, n6);
let n4 = new ListNode(9, n5);
let n3 = new ListNode(9, n4);
let n2 = new ListNode(9, n3);
let n1 = new ListNode(9, n2);
let header = new ListNode(9, n1);
let l1 = header;

let a3 = new ListNode(9, null);
let a2 = new ListNode(9, a3);
let a1 = new ListNode(9, a2);
let header2 = new ListNode(9, a1);
let l2 = header2;
let node = addTwoNumbers(l1, l2);
show(node);
