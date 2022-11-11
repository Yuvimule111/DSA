function binarySearchRec(arr, low, high, elementr) {

    if(low > high) {
        return -1
    }
      
     let mid =parseInt ((low + high) / 2);

     if(arr[mid] === elementr) {
        return mid;
     } else if (arr[mid] < elementr) {
        // right
        return binarySearchRec(arr, mid + 1, high, elementr);
     } else {
        //left
        return binarySearchRec(arr, low,  mid - 1, elementr);
     }
}

let arr = [1, 2, 5, 7, 13, 15, 16, 18, 24, 28, 29]
console.log(binarySearchRec(arr, 0, arr.length - 1, 18))

/**
 *  arr = 1, 2, 5, 7, 13, 15, 16, 18, 24, 28, 29
 *  element = 18
 * low = 0, high - 10, mid = 5
 * low = 6, high = 10, mid = 8
 * low = 6, high = 7, mid = 
 */