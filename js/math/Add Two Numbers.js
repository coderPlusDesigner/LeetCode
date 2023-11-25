// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
//     Input: l1 = [2,4,3], l2 = [5,6,4]
//     Output: [7,0,8]
//     Explanation: 342 + 465 = 807.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let l1 = new ListNode(9);
l1 = new ListNode(4, l1);
l1 = new ListNode(2, l1);

let l2 = new ListNode(9);
l2 = new ListNode(4, l2);
l2 = new ListNode(6, l2);
l2 = new ListNode(5, l2);

var addTwoNumbers = function (l1, l2) {
  function listToNumber(list) {
    let current = list;
    let numberForm = [];
    while (current) {
      numberForm.unshift(current.val);
      current = current.next;
    }
    return BigInt(numberForm.join(""));
  }
  let result = (listToNumber(l1) + listToNumber(l2)).toString();
  let resultList;
  for (let i = 0; i < result.length; i++) {
    if (i == 0) {
      resultList = new ListNode(result[i]);
    } else {
      resultList = new ListNode(result[i], resultList);
    }
  }
  return resultList;
};

console.log(addTwoNumbers(l1, l2));
