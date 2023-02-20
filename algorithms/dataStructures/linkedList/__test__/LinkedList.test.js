'use strict';

const log = require('../../../../test/log');

log('start: ', __filename);

const assert = require('assert').strict;
const LinkedList = require('../LinkedList');

{
  const linkedList = new LinkedList();
  assert(linkedList);
  assert.equal(linkedList.tail, null);
  assert.equal(linkedList.head, null);
  assert.equal(typeof linkedList.isEqual, 'function');
}

// APPEND
{
  const linkedList = new LinkedList();
  assert.equal(typeof linkedList.append, 'function');
  assert.equal(linkedList.append(1) instanceof LinkedList, true);
}

{
  const linkedList = new LinkedList();
  linkedList.append(1);
  assert.equal(linkedList.tail.value, 1);
  assert.equal(linkedList.head.value, 1);
  assert.equal(linkedList.tail.next, null);
  assert.equal(linkedList.head.next, null);
}

{
  const linkedList = new LinkedList();
  const obj = { key: 'key', value: 'value' };
  linkedList.append(obj);
  assert.equal(linkedList.tail.value, obj);
  assert.equal(linkedList.head.value, obj);
  assert.equal(linkedList.tail.next, null);
  assert.equal(linkedList.head.next, null);
}

{
  const linkedList = new LinkedList();
  linkedList.append(1).append(2);
  assert.equal(linkedList.head.value, 1);
  assert.equal(linkedList.tail.value, 2);
  assert.equal(linkedList.head.next.value, 2);
  assert.equal(linkedList.tail.next, null);
}

// PREPEND
{
  const linkedList = new LinkedList();
  assert.equal(typeof linkedList.prepend, 'function');
  assert.equal(linkedList.prepend(1) instanceof LinkedList, true);
}

{
  const linkedList = new LinkedList();
  linkedList.prepend(1);
  assert.equal(linkedList.tail.value, 1);
  assert.equal(linkedList.head.value, 1);
  assert.equal(linkedList.tail.next, null);
  assert.equal(linkedList.head.next, null);
}

{
  const linkedList = new LinkedList();
  const obj = { key: 'key', value: 'value' };
  linkedList.prepend(obj);
  assert.equal(linkedList.tail.value, obj);
  assert.equal(linkedList.head.value, obj);
  assert.equal(linkedList.tail.next, null);
  assert.equal(linkedList.head.next, null);
}

{
  const linkedList = new LinkedList();
  linkedList.prepend(1).prepend(2);
  assert.equal(linkedList.head.value, 2);
  assert.equal(linkedList.tail.value, 1);
  assert.equal(linkedList.head.next.value, 1);
  assert.equal(linkedList.tail.next, null);
}

// find
{
  const linkedList = new LinkedList();
  assert.equal(typeof linkedList.find, 'function');
}

{
  const linkedList = new LinkedList();
  linkedList.append(1).append(2).append(3).append(4).append(5);
  assert.equal(linkedList.find({ value: 10 }), null);
  assert.equal(linkedList.find({ value: 3 }).value, 3);
}

{
  const linkedList = new LinkedList();
  linkedList.append(1).append(2).append(3).append(4).append(5);
  assert.equal(linkedList.find({ callback: (val) => val === 10 }), null);
  assert.equal(linkedList.find({ callback: (val) => val === 3 }).value, 3);
}

// deleteTail
{
  const linkedList = new LinkedList();
  assert.equal(typeof linkedList.deleteTail, 'function');
  assert.equal(linkedList.append(1).deleteTail() instanceof LinkedList, true);
  try {
    linkedList.deleteTail();
  } catch (err) {
    assert.equal(err.message, 'LinkedList is Empty');
  }
}

{
  const linkedList = new LinkedList();
  linkedList.append(1).append(2).deleteTail();
  assert.equal(linkedList.head.value, 1);
  assert.equal(linkedList.tail.value, 1);
  assert.equal(linkedList.head.next, null);
}

// deleteHead
{
  const linkedList = new LinkedList();
  assert.equal(typeof linkedList.deleteHead, 'function');
  assert.equal(linkedList.append(1).deleteHead() instanceof LinkedList, true);
  try {
    linkedList.deleteHead();
  } catch (err) {
    assert.equal(err.message, 'LinkedList is Empty');
  }
}

{
  const linkedList = new LinkedList();
  linkedList.append(1).append(2).deleteHead();
  assert.equal(linkedList.head.value, 2);
  assert.equal(linkedList.tail.value, 2);
  assert.equal(linkedList.head.next, null);
}

// delete
{
  const linkedList = new LinkedList();
  assert.equal(typeof linkedList.delete, 'function');
  assert.equal(linkedList.append(1).delete(1) instanceof LinkedList, true);
  try {
    linkedList.delete();
  } catch (err) {
    assert.equal(err.message, 'LinkedList is Empty');
  }
}

{
  const linkedList = new LinkedList();
  linkedList.append(1).append(2).delete(1);
  assert.equal(linkedList.head.value, 2);
  assert.equal(linkedList.tail.value, 2);
  assert.equal(linkedList.head.next, null);
}

{
  const linkedList = new LinkedList();
  linkedList
    .append(1)
    .append(2)
    .append(3)
    .append(1)
    .append(2)
    .append(3)
    .delete(1);
  const expected = [2, 3, 2, 3];
  let i = 0;
  for (const element of linkedList) {
    assert.equal(element.value, expected[i]);
    i++;
  }
}

{
  const linkedList = new LinkedList();
  linkedList
    .append(1)
    .append(2)
    .append(3)
    .append(1)
    .append(2)
    .append(3)
    .delete(2);
  const expected = [1, 3, 1, 3];
  let i = 0;
  for (const element of linkedList) {
    assert.equal(element.value, expected[i]);
    i++;
  }
}

{
  const linkedList = new LinkedList();
  linkedList
    .append(1)
    .append(2)
    .append(3)
    .append(1)
    .append(2)
    .append(3)
    .delete(3);
  const expected = [1, 2, 1, 2];
  let i = 0;
  for (const element of linkedList) {
    assert.equal(element.value, expected[i]);
    i++;
  }
}

log('end: ', __filename);
