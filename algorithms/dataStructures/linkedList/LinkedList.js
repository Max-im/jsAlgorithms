'use strict';

const LinkedListNode = require('./LinkedListNode');
const Compare = require('../../util/Compare');

class LinkedList extends Compare {
  constructor() {
    super();

    /** @prop {LinkedListNode} */
    this.head = null;

    /** @prop {LinkedListNode} */
    this.tail = null;
  }

  /**
   * Prepend value to the list
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(value) {
    this.head = new LinkedListNode(value, this.head);
    if (!this.tail) this.tail = this.head;
    return this;
  }

  /**
   * Append value to the list
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    if (!this.head) {
      return this.prepend(value);
    }

    const node = new LinkedListNode(value);
    this.tail.next = node;
    this.tail = node;
    return this;
  }

  /**
   * Search
   * @param {Object} options - options object
   * @param {*} options.value - payload
   * @param {function} options.callback - callback function
   * @return {LinkedList | null}
   */
  find(options) {
    if (!this.head) return null;

    const callback = options.callback;
    const value = options.value;
    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && this.isEqual(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * Delete all elements of the list by passed value
   * @param {*} value
   * @return {LinkedList}
   */
  delete(value) {
    if (!this.head) throw new Error('LinkedList is Empty');

    while (this.head && this.isEqual(this.head.value, value)) {
      this.deleteHead();
    }

    while (this.tail && this.isEqual(this.tail.value, value)) {
      this.deleteTail();
    }

    if (!this.head) return this;

    let currentNode = this.head;
    while (currentNode.next) {
      if (this.isEqual(currentNode.next.value, value)) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    return this;
  }

  /**
   * Delete the last element of the list
   * @return {LinkedList}
   */
  deleteTail() {
    if (!this.head) throw new Error('LinkedList is Empty');

    if (this.head === this.tail) return this._reset();

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return this;
  }

  /**
   * Delete the first element of the list
   * @return {LinkedList}
   */
  deleteHead() {
    if (!this.head) throw new Error('LinkedList is Empty');

    if (!this.head.next) return this._reset();

    this.head = this.head.next;
    return this;
  }

  /**
   * Set the last and the first elements of the list equal to null
   * @return {LinkedList}
   */
  _reset() {
    this.head = null;
    this.tail = null;
    return this;
  }

  [Symbol.iterator]() {
    return {
      element: this.head,
      next: () => {
        const current = this.head;
        if (!current) return { done: true, value: null };
        this.head = current.next;
        return { done: false, value: current };
      },
    };
  }
}

/**
 * LinkdedList a data structure with link of the next / prev node
 * @exports LinkedList
 */
module.exports = LinkedList;
