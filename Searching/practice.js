// Que : Search in Rotated Sorted Array

/*
Input : nums = [4, 5, 6, 7, 0, 1, 2]; target = 0
OutPut : 4;


Input : nums = [4, 5, 6, 7, 0, 1, 2]; target = 3
OutPut : -1;

Input : nums = [1]; target = 0
OutPut : -1

*/

var search = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] === target) {
            return mid;
        }

        if(nums[left] <= nums[mid]) {
            if(nums[left] <= target && target <= nums[mid]) {

                right = mid - 1;
            } else {

                left = mid + 1;
            }
        }
        else {
            if(nums[mid] <= target && target <= nums[right]) {

                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        // console.log(mid);

        // console.log(left);
        // console.log(right);
        // console.log("Hello World");
    }
    return -1

}

//  let nums = [4, 5, 6, 7, 0, 1, 2];
 let nums= [1];
let target = 0;

console.log(search(nums, target));