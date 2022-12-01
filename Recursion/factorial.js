function factorial(x) {
    if(x == 1) return 1;
    // console.log(x)
    return x * factorial(x - 1);
    console.log(x);
}

console.log(factorial(5));
