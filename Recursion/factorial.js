function factorial(x) {
    if(x == 1) return 1;
    // console.log(x)
    return x * factorial(x - 1);
}

console.log(factorial(5));

// Cross check

function factorial1(n) {
    if(n == 1) return 1;
    return n * factorial1(n - 1);
};

console.log(factorial1(10));

