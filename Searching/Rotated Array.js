
   function findMin (A) {

        let low = 0, high = (A.length) - 1;
        let len = A.length;
        let cnt = 0;
        while(low <= high) {
            // Case 1 
            if(A[low] <= A[high]) return A[low];

            let mid = Math.floor((low + high) / 2);


            let next = (mid + 1) % len, prev = (mid - 1 + len) % len;

            
            if(A[mid] <= A[next] && A[mid] <= A[prev])
                 return A[mid];
            else if (A[mid] <= A[high])
                   high = mid - 1;
                    else 
                        low = mid + 1; 
        }
        return -1;
    };

let A = [1, 2, 3];
console.log(findMin(A));