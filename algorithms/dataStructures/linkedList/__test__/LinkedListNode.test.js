'use strict';

const path = require('path');
const fileName = path.basename(__filename);
const color = '\x1b[1;33m';
const colorEnd = '\x1b[0m';

console.log(color + 'start: ' + fileName + colorEnd);

const assert = require('assert').strict;
const LinkedListNode = require('../LinkedListNode');

{
  const linkedListNode = new LinkedListNode('string');
  assert(linkedListNode);
  assert(linkedListNode.value, 'string');
  assert(linkedListNode.next === null, true);
}

{
  const linkedListNode = new LinkedListNode({ key: 'key', value: 'value' });
  assert(linkedListNode);
  assert(linkedListNode.value.key, 'key');
  assert(linkedListNode.value.value, 'value');
  assert(linkedListNode.next === null, true);
}

{
  const nextNode = new LinkedListNode('string');
  const linkedListNode = new LinkedListNode(
    { key: 'key', value: 'value' },
    nextNode,
  );
  assert(linkedListNode);
  assert(linkedListNode.value.key, 'key');
  assert(linkedListNode.value.value, 'value');
  assert(linkedListNode.next, nextNode);
}

{
  const linkedListNode = new LinkedListNode(1);
  assert(typeof linkedListNode.toString, 'function');
  assert(linkedListNode.toString(), '1');
}

{
  const linkedListNode = new LinkedListNode({ key: 'key', value: 'value' });
  assert(typeof linkedListNode.toString, 'function');
  assert(
    linkedListNode.toString(),
    JSON.stringify({ key: 'key', value: 'value' }),
  );
}

console.log(color + 'finish: ' + fileName + colorEnd);
