const LinkedList = require('./linkedList');

// Usage
const list = new LinkedList();

list.add({ name: 'first' });
list.add({ name: 'second' });
list.add({ name: 'third' });

for (const element of list) {
    console.log(element);
}
