'use strict';

const log = require('../../../../test/log');

log('start: ', __filename);

const assert = require('assert').strict;
const Queue = require('../Queue');

{
  const queue = new Queue();
  assert(queue);
}

{
  const queue = new Queue();
  assert.equal(typeof queue.isEmpty, 'function');
  assert.equal(queue.isEmpty(), true);
  queue.add(1);
  assert.equal(queue.isEmpty(), false);
}

{
  const queue = new Queue();
  assert.equal(typeof queue.add, 'function');
  queue.add(1);
  assert.equal(queue.linkedList.head.value, 1);
}

{
  const queue = new Queue();
  assert.equal(typeof queue.get, 'function');
  queue.add(1);
  assert.equal(queue.isEmpty(), false);
  assert.equal(queue.get(), 1);
  assert.equal(queue.isEmpty(), true);
}

{
  const queue = new Queue();
  assert.equal(typeof queue.read, 'function');
  queue.add(1);
  assert.equal(queue.isEmpty(), false);
  assert.equal(queue.read(), 1);
  assert.equal(queue.isEmpty(), false);
}

log('end: ', __filename);
