'use strict';

const LinkedList = require('../linkedList/LinkedList');

const defaultHashTableSize = 32;

class HashTable {
  /** @param {number} hashTableSize */
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());

    this.keys = {};
  }

  /**
   * @param {string} key
   * @param {*} value
   * @return {void}
   */
  add(key, value) {
    const keyHash = this._hash(key);

    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (node) {
      node.value.value = value;
    } else {
      bucketLinkedList.append({ key, value });
    }
  }

  /**
   * @param {string} key
   * @return {*}
   */
  get(key) {
    const bucketLinkedList = this.buckets[this._hash(key)];
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    return node ? node.value.value : undefined;
  }

  /**
   * Check if there is hash item by key
   * @param {string} key
   * @return {boolean}
   */
  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  /**
   * Get keys from the hash
   * @return {string[]}
   */
  getKeys() {
    return Object.keys(this.keys);
  }

  /**
   * Delete hash data by key
   * @param {string} key
   * @return {*}
   */
  delete(key) {
    const keyHash = this._hash(key);
    delete this.keys[key];

    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (node) {
      return bucketLinkedList.delete(node.value);
    }

    return null;
  }

  /**
   * Convert key string to hash number.
   * @param {string} key
   * @return {number}
   */
  _hash(key) {
    const reduceFn = (total, char) => total + char.charCodeAt(0);
    const hash = Array.from(key).reduce(reduceFn, 0);
    return hash % this.buckets.length;
  }
}

/**
 * HashTable
 * @exports HashTable
 */
module.exports = HashTable;
