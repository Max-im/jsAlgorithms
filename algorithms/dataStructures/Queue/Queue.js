'use strict';

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  add(item) {
    const last = this.last;
    const element = { next: null, item };

    if (last) {
      last.next = element;
    } else {
      this.first = element;
    }
    this.last = element;
  }

  get() {
    if (!this.first) return null;
    const element = this.first;

    if (this.last === element) {
      this.first = null;
      this.last = null;
    } else {
      this.first = element.next;
    }
    return element.item;
  }
}

module.exports = Queue;
