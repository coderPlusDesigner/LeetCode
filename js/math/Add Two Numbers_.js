// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
//     Input: l1 = [2,4,3], l2 = [5,6,4]
//     Output: [7,0,8]
//     Explanation: 342 + 465 = 807.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

const l1 = new LinkedList();

l1.head = new ListNode(3);
l1.head = new ListNode(4, l1.head);
l1.head = new ListNode(2, l1.head);

const l2 = new LinkedList();

l2.head = new ListNode(4);
l2.head = new ListNode(6, l2.head);
l2.head = new ListNode(5, l2.head);

var addTwoNumbers = function (l1, l2) {
  // first number:
  let current = l1.head;
  let numberOne = [];
  while (current) {
    numberOne.unshift(current.val);
    current = current.next;
  }
  // second number:
  current = l2.head;
  let numberTwo = [];
  while (current) {
    numberTwo.unshift(current.val);
    current = current.next;
  }
  // The Sum:
  let result = (
    parseInt(numberOne.join("")) + parseInt(numberTwo.join(""))
  ).toString();
  // Converting the result to a linked list:
  class LinkedList {
    constructor() {
      this.head = null;
    }
  }
  const lSum = new LinkedList();
  for (let i = 0; i < result.length; i++) {
    if (!lSum.head) {
      lSum.head = new ListNode(parseInt(result[i]));
    } else {
      lSum.head = new ListNode(parseInt(result[i]), lSum.head);
    }
  }
  return lSum;
};

console.log(addTwoNumbers(l1, l2));
