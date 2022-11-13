// Find square root of number upto given precision using binary search

function squareRoot(number, precision) {

    let start = 0, end = number;
    let mid;

    let ans = 0.0;

    while(start <= end) {

        mid = (start + end) / 2;

        if(mid * mid == number) {
            ans = mid;
            break;
        }

        if(mid * mid < number) {
            strat = mid + 1;
            ans = mid;
        }else {
            end = mid - 1;
        }
    }

    let increment = 0.1;
    for(let i = 0; i < precision; i++) {
        while (ans * ans <= number) {
            ans += increment;
        }

        ans = ans - increment;
        increment = increment/ 10;
        }
        return ans;
}

console.log(squareRoot(50, 3));
