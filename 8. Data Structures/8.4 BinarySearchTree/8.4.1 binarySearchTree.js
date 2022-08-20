// Every parent node has at most two children
// Every node to the left of a parent node is always less than the parent
// Every node to the right of a parent node is always greater than the parent
/*
Big O of BST
- Insertion - O(log n)
- Searching - O(log n)
*/

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (!this.root) return null;
    let current = this.root;
    let foundNode = false;
    while (current && !foundNode) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        foundNode = true;
      }
    }
    if (!foundNode) return undefined;
    return current;
  }
}
let bst = new BinarySearchTree();
bst.insert(50);
bst.insert(40);
bst.insert(60);
bst.insert(35);
bst.insert(45);
bst.insert(55);
bst.insert(65);
// bst.find(40)
