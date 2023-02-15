'use strict';

class Stack {
  constructor() {
    this.last = null;
  }

  add(item) {
    const prev = this.last;
    const element = { prev, item };
    this.last = element;
  }

  get() {
    const element = this.last;
    if (!element) return null;
    this.last = element.prev;
    return element.item;
  }
}

module.exports = Stack;
