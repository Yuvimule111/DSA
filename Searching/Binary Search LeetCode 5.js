// Que : Search a 2D Matrix

var searchMatrix = function(matrix, target) {
    // Create two variable r = 0, c = matrix[0].size() - 1 as index of row and column....
    let r = 0;
    let c = matrix[0].length-1;
    // Run a while loop and traverse all the elements until row is equal to the size of the matrix...
    while(r < matrix.length && c >= 0) {
        // If the element is equal to the target, return true...
        if(target == matrix[r][c])
            return true;
        // Check if the current element is greater than target...
        else if(matrix[r][c] > target)
            c--;
        // If the current element is less than target...
        else 
            r++;
    }
    return false;       // As we didn't get the target, we can directly return false...
};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
let target = 3;

console.log(searchMatrix(matrix, target));