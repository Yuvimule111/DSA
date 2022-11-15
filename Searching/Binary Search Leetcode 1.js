// Search insert Position

/*
 Input : nums = [1, 3, 5, 6], target = 5
 output : 2

 Input : nums = [1, 3, 5, 6], target = 2
 output : 1

 Input : nums = [1, 3, 5, 6], target = 7
 output : 4

*/


var searchInsert = function(nums, target) {
    for(let i =0;i<nums.length;i++){
        if(nums[i] >= target)   return i;
    }
    return nums.length;
};
let nums = [1, 3, 5, 6]
let target = 5;

console.log(searchInsert(nums, target));
