const Queue = require('./Queue');

// Usage
const queue = new Queue();
queue.add({ name: 'first' });
queue.add({ name: 'second' });
queue.add({ name: 'third' });

console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
console.log(queue.get());