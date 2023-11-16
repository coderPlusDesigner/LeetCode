// 1. Two Sum
//   Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//   You may assume that each input would have exactly one solution, and you may not use the same element twice.
//   You can return the answer in any order.

// Example:
//   Input: nums = [2,7,11,15], target = 9
//   Output: [0,1]
//   Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Source: https://leetcode.com/problems/two-sum/

const nums = [3, 3];
let target = 6;

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
};

console.log(twoSum(nums, target));
