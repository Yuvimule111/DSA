function fobo(n) {
    if(n == 0 || n == 1) return n;
    return fobo(n - 1) + fobo(n - 2);
}

console.log(fobo(5));
