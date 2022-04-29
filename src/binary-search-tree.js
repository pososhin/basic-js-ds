const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.r = null;
  }
  get rt() {
    return this.r;
  }
  set rt(rt) {
    this.r = rt;
    return this.r;
  }
  root = () => this.rt;

  addNode(rt, node) {
    if (node.cmp(rt) < 0) {
      if (rt.left === null) {
        rt.left = node;
      } else {
        this.addNode(rt.left, node);
      }
    } else {
      if (rt.right === null) {
        rt.right = node;
      } else {
        this.addNode(rt.right, node);
      }
    }
  }
  add(date) {
    let node = new Node(date);
    if (this.rt === null) {
      this.rt = node;
    } else {
      this.addNode(this.rt, node);
    }
  }
  inOrderTraverse(callback, node = this.rt) {
    if (node != null) {
      this.inOrderTraverse(callback, node.left);
      callback(node.data, node);
      this.inOrderTraverse(callback, node.right);
    }
  }
  find(d, node = this.rt) {
    if (node == null) {
      return null;
    } else if (!node.cmp(d)) {
      return node;
    }
    if (node.cmp(d) > 0) {
      return this.find(d, node.left);
    } else {
      return this.find(d, node.right);
    }
  }
  has(data) {
    return this.find(data) !== null;
  }
  min(rt = this.rt) {
    if (rt === null) return null;
    return this.minNode(rt).data;
  }
  minNode(rt = this.rt) {
    if (rt === null) return null;
    if (rt.left === null) return rt;
    return this.minNode(rt.left);
  }
  min(rt = this.rt) {
    if (rt === null) return null;
    if (rt.left === null) return rt.data;
    return this.min(rt.left);
  }
  max(rt = this.rt) {
    if (rt.right === null) return rt.data;
    return this.max(rt.right);
  }
  remove(date) {
    this.rt = this.removeNode(date);
  }
  removeNode(d, node = this.rt) {
    if (node.cmp(d) > 0) {
      node.left = this.removeNode(d, node.left);
    } else if (node.cmp(d) < 0) {
      node.right = this.removeNode(d, node.right);
    } else {
      if (node.right === null) {
        node = node.left;
      } else if (node.left === null) {
        node = node.right;
      } else {
        let minNode = this.minNode(node.right);
        node.data = minNode.data;
        node.right = this.removeNode(node.data, node.right);
      }
    }
    return node;
  }
}
class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.d = data;
  }
  get data() {
    return this.d;
  }
  set data(d) {
    this.d = d;
    return this.d;
  }
  cmp(node) {
    if (typeof node == "number") {
      return this.data - node;
    }
    return this.data - node.data;
  }
}

module.exports = {
  BinarySearchTree
};