// Initilization

class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }
}


// Other Method for initilization

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null
//     }
// }

// const stack = new Stack();

// console.log(stack.data.length);

// Push Explanation

push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;

//     stack.push(100);


// }


let stack = new Stack();

Stack.push(100);
Stack.push(200);

console.log(stack.top)

push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
}

}
