function KrightRotation(head, k) {

    let current = head;
    let curre_prv = null;
    while(k-- > 1) {
        current = current.next;
        current = current.next;
    }

    let sec_current = head;

    while(current !== null) {
        curre_prv = sec_current;
        sec_current = sec_current.next;
        current = current.next;
    }
    curre_prv.next = null;
    current.next = head;
    head = sec_current;
    return head;
}


const list = new LinkedList() ;
list.createListArray([])
list.head = KrightRotation(list, head, 5)

list.printList();