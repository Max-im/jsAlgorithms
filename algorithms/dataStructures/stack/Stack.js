'use strict';

const LinkedList = require('../linkedList/LinkedList');

/**
 * Stack
 * @typedef Stack
 */
class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  /**
   * Show is the queue has values
   * @return {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   * Add a new element
   * @param {*} value
   */
  add(value) {
    this.linkedList.prepend(value);
    return this;
  }

  /**
   * Read the element without removing
   * @return {*}
   */
  read() {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.head.value;
  }

  /**
   * Return last item value and remove it from queue
   * @return {*}
   */
  get() {
    const data = this.linkedList.head.value;
    this.linkedList.deleteHead();
    return data;
  }
}

/**
 * Stack LIFO data structure
 * @exports Stack
 */
module.exports = Stack;
