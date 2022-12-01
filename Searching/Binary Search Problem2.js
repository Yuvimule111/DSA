// // Triangle 

// function noOfTriangles(arr) {
//     arr.sort((a,b) => a - b);
//     let count = 0;
//     for(let i = 0; i < arr.length-2; i++) {
//         for(let j = i + 1; j < arr.length - 1; j++) {
//             let sum = arr[i] + arr[j];
//             let index = binarySearch(arr, j +1, arr.length - );
//             count += index - j+ 1;

//         }
//     }
//     return count;


// }

function noOfTriangles(arr) {
    arr.sort((a,b) => a-b);
    let count = 0;
    for(let i=0;i<arr.length-2;i++) {
        for(let j=i+1;j<arr.length-1;j++) {
            let sum = arr[i] + arr[j];
            let index = binarySearch(arr, j+1, arr.length - 1, sum);
            if(index !== j) {
                count+=index-j;
            }
            
        }
    }
    return count;
}

function binarySearch(arr, low, high, sum) {

    while(low <= high) {
        let mid = parseInt((low + high) / 2);
        if(arr[mid] < sum) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return Math.min(low, high);
}

console.log(noOfTriangles([10, 21, 22, 100, 101, 200, 300]));