'use strict';

const Stack = require('./Stack');

// Usage
const stack = new Stack();
stack.add({ name: 'first' });
stack.add({ name: 'second' });
stack.add({ name: 'third' });

console.dir(stack.get());
console.dir(stack.get());
console.dir(stack.get());
console.dir(stack.get());
