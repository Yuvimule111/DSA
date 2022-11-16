// Que : PairOfTopics

/*


a[i] + a[j] > b[i] + b[j]
a[i] - b[i] + (a[j] - b[j]) > 0

a = 4 8 2 6 2
b = 3 5 4 1 3
d = 0 3 -2 5 -1

ans = 7

*/

/*

a[i] + a[j] > b[i] + b[j]
a[i] - b[i] + a[j] > b[j]
(a[i] - b[i]) + (a[j] - b[j]) > 0
c[i] + c[j] > 0
c[i] > -c[j]

a = 4 8 2 6 2
b = 4 5 4 1 3

c = 0 3 -2 5 -1

c = -2 -1 0 3 5
1. if c[i] is +, c[j] should be smaller till it's negative.
2. if c[i] is -, c[j] should be greater in positive.

index = 0, pairs = 2
index = 1, pairs = 3
index = 2, pair = 1
index = 3, pair = 1

ans = 7
O(n2).

*/

function findPairOfTopics(a, b) {

    let c = new Array(a.length);
    for(let i=0;i<a.length;i++) {
        c[i] = a[i] - b[i];
    }

    for(let i=c.length - 1; i>=0; i--) {
        let count = 0;
        let index = binarySearch(0, i-1, c[i]);

        count+=Math.abs(index - i);
    }
    return count;
}
// c = -2 -1 0 3 5
// c[i] + c[j] > 0, -6 -5 -4 -3 -2 -1 0 1 2 3    +in 
function binarySearch(low, high, element) {

    while(low <= high) {
        let mid = parseInt((low + high) / 2);
        
        if((element > 0 && mid < -element) 
        || (element < 0 && mid < -element) 
        || (element === 0 && mid <= 0)) {
            low = mid + 1;
        } else if((element > 0 && mid > -element) 
        || (element < 0 && mid > -element)
        || (element === 0 && mid > 0)) {
            // left
            high = mid - 1;
        }
    }
    return high;
}

console.log(findPairOfTopics())