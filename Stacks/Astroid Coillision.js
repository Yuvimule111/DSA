function asteroidCollision(asteroied) {

    let stack = [];

    for(let i = 0; i < asteroied.length; i++) {

        while(stack.length 
            && stack[stack.length - 1] > 0
            && stack[stack.length - 1] <- asteroied[i]){
               stack.pop();
            }

            if(asteroied[i] > 0 || !stack.length || stack[stack.length - 1] < 0) {
               stack.push(asteroied[i]);
            }
    }

    return stack;
}

console.log(asteroidCollision([-10, 11, 21, -20, -30]));