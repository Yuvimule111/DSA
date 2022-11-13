let binarySearch = function (arr, findNumbrer, start, end) {
    if(start > end) return;

    let mid = Math.floor((start + end) / 2);

    if(arr[mid] === findNumbrer) {
        if(arr[mid - 1] === findNumbrer || arr[mid + 1] === findNumbrer) {
            return true;
        }
        return "FALSE"
    }

    if(arr[mid] > findNumbrer ) {
        return binarySearch(arr, findNumbrer, start, mid - 1);
    } else {
        return binarySearch(arr, findNumbrer, mid + 1 , end);
    }
};
    let arr = [1, 3, 5, 5, 7, 8, 9];
    let findNumbrer = 5;

    console.log(binarySearch(arr, findNumbrer, 0, arr.length - 1));
