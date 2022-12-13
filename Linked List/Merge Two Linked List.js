function mergeSortedLinkedList(l1, l2) {
    let result = new LinkedList();

    if(l1.number <= l2.number) {
        let l1Next = l1.next;
        result.head = l1;
        l1 = l1Next;
    } else {
        let l2Next = l2.next;
        current.next = l2;
        l2 = l2.next
    }
    current = current.next;

    while(l1  !== null && l2 !== null) {

        if(l1.number <= l2.number) {
            let l1Next = l1.next;
            result.head = l1;
            l1 = l1Next
        } else {
            let l2Next = l2.next;
            current.next = l1;
            l1 = l1.next;
        }
    }
}

