/* A Graph consists of a finite set of vertices(or nodes) and a set of Edges that connect a pair of nodes.
A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred 
to as vertices and the edges are lines or arcs that connect any two nodes in the graph
 */

/*
ESSENTIAL GRAPH TERMS
- Vertex - a node
- Edge - connection between nodes
- Weighted/Unweighted - values assigned to distances between vertices
- Directed/Undirected - directions assigned to distanced between vertices
*/

// DIFFERENCES & BIG O
// OPERATION	                             ADJACENCY LIST	                         ADJACENCY MATRIX
// Add Vertex	                                   O(1)	                                  ​O(|V^2|)
// Add Edge	                                     O(1)	                                  O(1)
// Remove Vertex	                               O(|V| + |E|)	                          ​O(|V^2|)
// Remove Edge	                                 O(|E|)	                                O(1)
// Query	                                       O(|V| + |E|)	                          O(1)
// Storage	                                     O(|V| + |E|)	                          ​O(|V^2|)

// Adjacency List
// Takes up more space (in sparse graphs)
// Slower to iterate over all edges
// Faster to lookup specific edge
// Can take up less space (in sparse graphs)
// Faster to iterate over all edges
// Can be slower to lookup specific edge

// Adjacency Matrix
// Takes up more space (in sparse graphs)
// Slower to iterate over all edges
// Faster to lookup specific edge

// WE ARE BUILDING AN UNDIRECTED GRAPH
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v != vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v != vertex1
    );
  }
  remoVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstRecursive(start) {
    let result = [];
    let visited = [];
    let adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    })(start);
    return result;
  }
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  breadthFirst(start) {
    let queue = [start];
    let result = [];
    let visited = {};
    let currentVertex;
    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
// g.addVertex("Tokyo");
// g.addVertex("Dallas");
// g.addEdge("Tokyo", "Dallas");
// g.removeEdge("Tokyo", "Dallas");
// g.remoVertex("Tokyo");

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// depthFirstRecursive
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

console.log(g.depthFirstRecursive("A"));
console.log(g.breadthFirst("A"));
