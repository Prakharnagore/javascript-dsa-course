// FIRST IN FIRST OUT DATA STRUCTURE

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // Adding to the beginning of the Queue!
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  // Removing from the beginning of the Queue!
  dequeue() {
    if (!this.first) return undefined;
    if (this.first === this.last) {
      this.last = null;
    }
    let removedNode = this.first;
    this.first = removedNode.next;
    this.size--;
    removedNode.next = null;
    return removedNode;
  }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
