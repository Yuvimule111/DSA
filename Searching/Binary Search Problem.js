// Que : precision Square root

function squrOfNumber(number, precision) {
 
    let integerPart = findIntegerpart(number);
    let decimal = 0.1;
    let ans = integerPart;
    for(let i = 1; i <= precision; i++) {
        while(ans*ans <= number) {
            ans = integerPart + decimal;
        }

        ans = ans - decimal;
        decimal = decimal / 10;
    }
    return ;
}

function findIntegerpart(number) {

    let start = 1;
    let end = number;
    while(start <= end) {
        let mid = parseInt((start + end) /2);
        if(mid*mid === number) {
            return mid;
        } else if(mid*mid < number) {

        }else {
            end = mid - 1;
        }
    }
    return Math.min(start, end);

}

console.log(squrOfNumber(10, 2))