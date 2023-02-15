'use strict';

const LinkedList = require('./LinkedList');

// Usage
const list = new LinkedList();

list
  .append({ name: 'first' })
  .append({ name: 'second' })
  .append({ name: 'third' })
  .append({ name: 'first' })
  .append({ name: 'second' })
  .append({ name: 'third' })
  .delete({ name: 'third' });

for (const element of list) {
  console.log(element.value);
}
