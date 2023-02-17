'use strict';

const Stack = require('./Stack');

// Usage
const stack = new Stack();

stack.add(1).add(2).add(3).add(4).add(5);

console.log(stack.read()); // 5
console.log(stack.get()); // 5
console.log(stack.get()); // 4
