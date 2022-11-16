// Que : Search in Roatated sorted Array 2

/*
 Input : nums = [2, 5, 6, 0, 0, 1, 2]; target = 0;
 OutPut : true

 Input : nums = [2, 5, 6, 0, 0, 1, 2] ; target = 3;
 OutPut : false
*/

var Search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if(nums[mid] === target) return true;

        if(nums[mid] === nums[start] && nums[end] === nums[mid]) {
            start++;
            end--;
        }

        else if(nums[start] <= nums[mid]) {

            if(nums[start] <= target && target <= nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if(nums[mid] <= target && nums[end] >= target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return false
};

let nums = [2, 5, 6, 0, 0, 1, 2];
let target = 3;

console.log(Search(nums, target));
