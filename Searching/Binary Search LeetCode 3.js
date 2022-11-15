// Que : Missing Number

/*
Input : nums = [3, 0, 1];
Output : 2;

Input : nums = [0, 1];
OutPut : 2;

Input : nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
OutPut : 8;

*/

var missingNumber = function(nums) {
    var n = nums.length;
    var total = nums.reduce((accu, val) => {
        return accu + val;
    });
    var expected = n*(n + 1) / 2;
    return expected - total;
};

let nums = [3, 0, 1];
console.log(missingNumber(nums));
