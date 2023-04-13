const { NotImplementedError } = require('../extensions/index.js')
const { Node } = require('../extensions/list-tree.js')
// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

// class Node {
//   constructor(data) {
//     this.data = data
//     this.left = null
//     this.right = null
//   }
// }
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    const newNode = new Node(data)
    if (this.rootNode === null) {
      this.rootNode = newNode
    } else {
      this.insertNode(this.rootNode, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  has(data) {
    return this.searchNode(this.rootNode, data) !== null
  }

  find(data) {
    return this.searchNode(this.rootNode, data)
  }

  searchNode(node, data) {
    if (node === null) {
      return null
    }

    if (data < node.data) {
      return this.searchNode(node.left, data)
    } else if (data > node.data) {
      return this.searchNode(node.right, data)
    } else {
      return node
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data)
  }

  removeNode(node, data) {
    if (node === null) {
      return null
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data)
      return node
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data)
      return node
    } else {
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      const minValue = this.findMinValue(node.right)
      node.data = minValue
      node.right = this.removeNode(node.right, minValue)
      return node
    }
  }

  findMinValue(node) {
    if (node.left === null) {
      return node.data
    } else {
      return this.findMinValue(node.left)
    }
  }

  min() {
    if (this.rootNode === null) {
      return null
    }
    return this.findMinValue(this.rootNode)
  }

  max() {
    if (this.rootNode === null) {
      return null
    }
    return this.findMaxValue(this.rootNode)
  }

  findMaxValue(node) {
    if (node.right === null) {
      return node.data
    } else {
      return this.findMaxValue(node.right)
    }
  }
}
module.exports = {
  BinarySearchTree,
}
