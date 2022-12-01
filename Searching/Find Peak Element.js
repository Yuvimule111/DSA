// //

// function peakElement(arr) {
//     let low = 0;
//     let high = arr.length - 1;

//     while(low <= high) {

//         let mid = parseInt((low + high) / 2);

//         if((arr[mid] > arr[mid - 1]
//             && arr[mid] > arr[mid + 1])
//             || mid === 0
//             || mid === arr.length - 1) {
//                 return mid;
//             } else if(arr[mid] > arr[mid - 1]
//                 && arr[mid] <= arr[mid + 1])
//     } 
// }