/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return undefined;
  }
}

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return undefined;
  }


  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      return undefined; // Empty list, nothing to pop
    }

    let poppedValue;
    if (this.head === this.tail) {
      // Only one node in the list
      poppedValue = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      // Traverse the list to find the second-to-last node
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }

      // Update pointers to remove the last node
      poppedValue = this.tail.val;
      current.next = null;
      this.tail = current;
    }

    this.length--;
    return poppedValue;
  }


  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      return undefined; // Empty list, nothing to shift
    }

    const shiftedValue = this.head.val;
    this.head = this.head.next;
    this.length--;

    if (!this.head) {
      this.tail = null; // List became empty after shifting
    }

    return shiftedValue;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return undefined; // Invalid index
    }

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < idx) {
      current = current.next;
      currentIndex++;
    }

    return current.val;
  }


  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      return; // Invalid index
    }
  
    let current = this.head;
    let currentIndex = 0;
  
    while (currentIndex < idx) {
      current = current.next;
      currentIndex++;
    }
  
    current.val = val;
  }
  

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      return; // Invalid index
    }
  
    const newNode = new Node(val);
  
    if (idx === 0) {
      // Inserting at the beginning of the list
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else if (idx === this.length) {
      // Inserting at the end of the list
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      // Inserting in the middle of the list
      let current = this.head;
      let currentIndex = 0;
  
      while (currentIndex < idx - 1) {
        current = current.next;
        currentIndex++;
      }
  
      newNode.next = current.next;
      current.next = newNode;
    }
  
    this.length++;
  }
  

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return undefined; // Invalid index
    }
  
    let removedValue;
    if (idx === 0) {
      // Removing the first node
      removedValue = this.head.val;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
    } else {
      // Removing a node in the middle or at the end of the list
      let current = this.head;
      let currentIndex = 0;
  
      while (currentIndex < idx - 1) {
        current = current.next;
        currentIndex++;
      }
  
      removedValue = current.next.val;
      current.next = current.next.next;
  
      if (!current.next) {
        this.tail = current;
      }
    }
  
    this.length--;
    return removedValue;
  }
  
  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return 0; // Empty list, average is 0
    }
  
    let sum = 0;
    let count = 0;
    let current = this.head;
  
    while (current) {
      sum += current.val;
      count++;
      current = current.next;
    }
  
    return sum / count;
  }
  

  average() {
    if (!this.head) {
      return 0; // Empty list, average is 0
    }

    let sum = 0;
    let count = 0;
    let current = this.head;

    while (current) {
      sum += current.val;
      count++;
      current = current.next;
    }

    return sum / count;
  }


// Example usage:
const list = new LinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);

const avg = list.average();
console.log(avg); // Output: 25 (average of 10, 20, 30, 40 is 25)
module.exports = LinkedList;
