function removeDuplkicates(list) {

    if(list.head === null) {
        return;
    }
    let current = list.head;

    while(current.next !== null) {
        if(current.number === current.next.number) {
            current.next = current.next.next;       
         } else {
            
         }
            } 
    }
}