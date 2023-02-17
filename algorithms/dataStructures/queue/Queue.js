'use strict';

const LinkedList = require('../linkedList/LinkedList');

/**
 * Queue
 * @typedef Queue
 */
class Queue {
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
    this.linkedList.append(value);
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
 * Queue FIFO data structure
 * @exports Queue
 */
module.exports = Queue;
