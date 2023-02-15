'use strict';

const log = require('../../../../test/log');

log('start: ', __filename);

const assert = require('assert').strict;
const LinkedListNode = require('../LinkedListNode');

{
  const linkedListNode = new LinkedListNode('string');
  assert(linkedListNode);
  assert.equal(linkedListNode.value, 'string');
  assert.equal(linkedListNode.next, null);
}

{
  const linkedListNode = new LinkedListNode({ key: 'key', value: 'value' });
  assert(linkedListNode);
  assert.equal(linkedListNode.value.key, 'key');
  assert.equal(linkedListNode.value.value, 'value');
  assert.equal(linkedListNode.next, null);
}

{
  const nextNode = new LinkedListNode('string');
  const linkedListNode = new LinkedListNode(
    { key: 'key', value: 'value' },
    nextNode,
  );
  assert(linkedListNode);
  assert.equal(linkedListNode.value.key, 'key');
  assert.equal(linkedListNode.value.value, 'value');
  assert.equal(linkedListNode.next, nextNode);
}

{
  const linkedListNode = new LinkedListNode(1);
  assert.equal(typeof linkedListNode.toString, 'function');
  assert.equal(linkedListNode.toString(), '1');
}

{
  const linkedListNode = new LinkedListNode({ key: 'key', value: 'value' });
  assert.equal(typeof linkedListNode.toString, 'function');
  assert.equal(
    linkedListNode.toString(),
    JSON.stringify({ key: 'key', value: 'value' }),
  );
}

log('end: ', __filename);
