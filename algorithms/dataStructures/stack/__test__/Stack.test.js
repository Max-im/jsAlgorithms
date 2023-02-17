'use strict';

const log = require('../../../../test/log');

log('start: ', __filename);

const assert = require('assert').strict;
const Stack = require('../Stack');

{
  const stack = new Stack();
  assert(stack);
}

{
  const stack = new Stack();
  assert.equal(typeof stack.isEmpty, 'function');
  assert.equal(stack.isEmpty(), true);
  stack.add(1);
  assert.equal(stack.isEmpty(), false);
}

{
  const stack = new Stack();
  assert.equal(typeof stack.add, 'function');
  stack.add(1).add(2).add(3);
  assert.equal(stack.linkedList.head.value, 3);
}

{
  const stack = new Stack();
  assert.equal(typeof stack.get, 'function');
  stack.add(1).add(2).add(3);
  assert.equal(stack.get(), 3);
  assert.equal(stack.get(), 2);
}

{
  const stack = new Stack();
  assert.equal(typeof stack.read, 'function');
  stack.add(1).add(2).add(3);
  assert.equal(stack.read(), 3);
  assert.equal(stack.read(), 3);
}

log('end: ', __filename);
