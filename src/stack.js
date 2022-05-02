const { NotImplementedError } = require('../extensions/index.js');

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
    this.stek = []
  }
  push(el) {
    return this.stek.push(el) ||undefined || null
  }

  pop() {
    return this.stek.pop() || null || undefined
  }

  peek() {
    return this.stek[this.stek.length - 1] || undefined || null
  }
}

module.exports = {
  Stack
};
