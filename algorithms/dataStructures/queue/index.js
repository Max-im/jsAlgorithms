'use strict';

const Queue = require('./Queue');

// Usage
const queue = new Queue();

queue.add(1).add(2).add(3).add(4).add(5);

console.log(queue.read()); // 1
console.log(queue.get()); // 1
console.log(queue.get()); // 2
