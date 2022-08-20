// LAST IN FIRST OUT DATA STRUCTURE
// We can implement stack using array or linked list
/*
BIG O of STACKS
- Insertion -   O(1)
- Removal -   O(1)
- Searching -   O(N)
- Access -   O(N)
 */

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this;
  }
  pop() {
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

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
