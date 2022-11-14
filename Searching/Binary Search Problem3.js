// Que : Split Array
// maximum subArray sum should be minimum

function splitArray(arr, k) {
    let high = arr.reduce((acc, num) => acc + num);
    let low = 0;

    while(low <= high) {
        let mid = parseInt((low+high)/2);
        let isPossible = checkPossiblity(arr, k, mid);
        if(isPossible) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

function checkPossiblity(arr, k, mid) {
    let sum = 0;
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > mid) {
            return false;
        }
        if(sum + arr[i] <= mid) {
            sum += arr[i];

        } else {
            sum = arr[i];
            count++
        }
    }
    count++;
    if(count <= k)
        return true;
    else
       return false;
}

console.log(splitArray([1,2,3,4,], 3));