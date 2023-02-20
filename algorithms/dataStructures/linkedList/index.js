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

const found = list.find({ value: { name: 'second' } });
console.log({ found });

for (const element of list) {
  console.log(element.value);
}
