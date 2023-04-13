const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.array = [] // array to store stack elements
  }

  push(element) {
    this.array.push(element) // adds an element to the top of the stack
  }

  pop() {
    return this.array.pop() // removes and returns the top element from the stack
  }

  peek() {
    return this.array[this.array.length - 1] // returns the top element without removing it
  }
}

module.exports = {
  Stack,
}
