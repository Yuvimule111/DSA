// Search insert Position

/*
 Input : nums = [1, 3, 5, 6], target = 5
 output : 2

 Input : nums = [1, 3, 5, 6], target = 2
 output : 1

 Input : nums = [1, 3, 5, 6], target = 7
 output : 4

*/


var search = function (nums, target) {

    let low = 0;
    let high = nums.length - 1;

    while(low <= high) {
        let mid = ~~(low + (high + low) / 2);
        if(nums[mid] > target) {
            high = --mid;
        } else if(nums[mid] < target) {
            low = ++mid;
        } else return mid
    }
    return low;
};
let nums = [1, 3, 5, 6]
let target = 2;

console.log(search(nums, target));
