// Very similar to a binary search tree, but with some different rules!
// used to implement priority queues
// THERE'S AN EASY WAY OF STORING A BINARY HEAP...
// A LIST/ARRAY

// For any index of an array n...
// The left child is stored at 2n + 1
// The right child is at 2n + 2
// For any child node at index  n...
// Its parent is at index (n-1)/2

/*
Big O of Binary Heaps
- Insertion -   O(log N)
- Removal -   O(log N)
- Search -   O(N)
 */

class BinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(key) {
    this.values.push(key);
    this.bubbleUp();
  }
  bubbleUp() {
    let childIndex = this.values.length - 1;
    let child = this.values[childIndex];
    while (childIndex > 0) {
      let parentIndex = Math.floor((childIndex - 1) / 2);
      let parent = this.values[parentIndex];
      if (child > parent) {
        this.values[parentIndex] = child;
        this.values[childIndex] = parent;
        childIndex = parentIndex;
      } else {
        break;
      }
    }
  }
  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let parentIndex = 0;
    let parentElement = this.values[parentIndex];
    let length = this.values.length;
    while (true) {
      let leftChildIndex = 2 * parentIndex + 1;
      let rightChildIndex = 2 * parentIndex + 2;
      let leftChild;
      let rightChild;
      let swapIndex = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > parentElement) {
          swapIndex = leftChildIndex;
        }
      }
      if (rightChildIndex < parentElement) {
        rightChild = this.values[rightChildIndex];
        if (
          (swapIndex === null && rightChild > parentElement) ||
          (swapIndex !== null && rightChild > leftChild)
        ) {
          swapIndex = rightChildIndex;
        }
      }
      if (swapIndex === null) break;
      this.values[parentIndex] = this.values[swapIndex];
      this.values[swapIndex] = parentElement;
      parentIndex = swapIndex;
    }
  }
}

let bh = new BinaryHeap();
bh.insert(10);
bh.insert(20);
bh.insert(50);
bh.insert(60);
bh.insert(40);
bh.insert(90);
bh.extractMax();
console.log(bh);
