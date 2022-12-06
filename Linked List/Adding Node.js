const node = require('/node')

function Node(number) {
    this.number = number;
    this.next = null;
}

class SinglyLinkedList{

insertAtStart(data){
    let newNode = new Node(data); // Create a new Node

    newNode.next = this.head; // Set next node of new node to currentr head

    this.head = newNode; // Update the head pointer to the new node

      this.length++;
}
}


const l1 = new SinglyLinkedList();
l1.insertAtStart(100);
l1.insertAtStart(500);


printLinkedList(){
    let current = this.head;

    // Print till current exists or current is truthy

    while(current) {
        console.log(current);
        current = current.next;
    }
}
l1.printLinkedList();