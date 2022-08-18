/*
What is a linked list?
A data structure that contains a head, tail and length property.
Linked Lists consist of nodes, and each node has a value and a pointer to another node or null
Singly Linked List - https://miro.medium.com/max/700/1*iiEWrP2IznA6HbmuIdK0lQ.png

Big O of Singly Linked Lists 
- Insertion -   O(1)
- Removal -   It depends.... O(1) or O(N)
- Searching -   O(N)
- Access -   O(N)

*/

// Comparisons with Arrays

// Lists
// Do not have indexes!
// Connected via nodes with a next pointer
// Random access is not allowed

// Arrays
// Indexed in order!
// Insertion and deletion can be expensive
// Can quickly be accessed at a specific index

// Operation -
// PUSH
// POP
// SHIFT
// UNSHIFT
// GET
// SET
// INSERT
// REMOVE
// REVERSE

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    currentHead.next = null;
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index == 0) {
      this.unshift(val);
      return true;
    }
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let nextNode = prev.next;
    prev.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.pop();
      return true;
    }
    if (index == 0) {
      this.shift();
      return true;
    }

    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length++;
    return this;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();

list.push(20);
list.push(21);
list.push(22);
list.push(23);
list.push(24);
list.push(25);
list.push(26);
list.push(27);

// list.pop();

// list.shift();

// list.unshift(20);

// list.get(3);

// list.set(6, 26.5);

// list.insert(8, 28);

// list.remove(8))

// console.log(list.reverse());
