'use strict';

const log = require('../../../../test/log');

log('start: ', __filename);

const assert = require('assert').strict;
const HashTable = require('../HashTable');

{
  const hashTable = new HashTable();
  assert(hashTable);
  assert.equal(Array.isArray(hashTable.buckets), true);
  assert.equal(typeof hashTable.keys, 'object');
  assert.equal(Object.keys(hashTable.keys).length, 0);
}

{
  const hashTable = new HashTable();
  assert.equal(Object.keys(hashTable.keys).length, 0);
  hashTable.add('unique', { name: 'name' });
  assert.equal(Object.keys(hashTable.keys).length, 1);
  assert.equal('unique' in hashTable.keys, true);
}

// ADD
{
  const hashTable = new HashTable();
  assert.equal(Object.keys(hashTable.keys).length, 0);
  hashTable.add('unique', { name: 'some name' });
  assert.equal(Object.keys(hashTable.keys).length, 1);
  assert.equal('unique' in hashTable.keys, true);
}

// GET
{
  const hashTable = new HashTable();
  hashTable.add('unique', { name: 'some name' });
  assert.notStrictEqual(hashTable.get('unique'), { name: 'some name' });
}

// HAS
{
  const hashTable = new HashTable();
  assert.equal(hashTable.has('unique'), false);
  hashTable.add('unique', { name: 'some name' });
  assert.equal(hashTable.has('unique'), true);
}

// getKeys
{
  const hashTable = new HashTable();
  assert.equal(hashTable.getKeys().length, 0);
  hashTable.add('unique', { name: 'some name' });
  assert.equal(hashTable.getKeys().length, 1);
  assert.notStrictEqual(hashTable.getKeys(), ['unique']);
}

// delete
{
  const hashTable = new HashTable();
  hashTable.add('unique', { name: 'some name' });
  assert.equal(hashTable.getKeys().length, 1);
  hashTable.delete('unique');
  assert.equal(hashTable.getKeys().length, 0);
}

log('end: ', __filename);
