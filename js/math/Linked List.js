class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // Insert firts node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  // Get at index
  getAt(index) {
    if (index > 0 && index > this.size) {
      console.log(null);
    } else {
      if (index === 0) {
        console.log(this.head);
      } else {
        let count = 0;
        let current = this.head;
        while (count < index) {
          current = current.next;
          count++;
        }
        console.log(current);
      }
    }
  }
  // Insert at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    } else {
      if (index === 0) {
        this.head = new Node(data, this.head);
      } else {
        const node = new Node(data);
        let current = this.head;
        let previous;
        let count = 0;
        while (count < index) {
          previous = current;
          current = current.next;
          count++;
        }
        previous.next = node;
        node.next = current;
      }
      this.size++;
    }
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index >= this.size) {
      return;
    } else {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
        count--;
        return;
      }
      let previous;
      let count = 0;
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
      this.size--;
    }
  }
  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }
  // Print list data
  printData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(111);
ll.insertFirst(121);
ll.insertFirst(131);
ll.insertFirst(141);

ll.insertLast("last one");

ll.insertAt("mid value", 2);

ll.printData();

ll.getAt(2);

console.log("-----");

ll.removeAt(1);
ll.printData();

ll.clearList();
console.log(ll);
