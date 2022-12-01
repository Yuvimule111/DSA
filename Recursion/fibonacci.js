function fobo(n) {

    // console.log(n);
    if(n == 0 || n == 1) return n;
    //  console.log(n);

    return fobo(n - 1) + fobo(n - 2);
}

console.log(fobo(5));


// cross check

function fib(m) {
    // console.log(m);

    if(m == 0 || m == 1) return 1;

    return fib(m - 1) + fib(m - 2);


}

console.log(fib(8));
