'use strict';

/**
 * Node of LinkedList
 * @typedef LinkedListNode
 */
class LinkedListNode {
  /**
   * @param {*} value
   * @param {LinkedListNode} next
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : JSON.stringify(this.value);
  }
}

module.exports = LinkedListNode;
