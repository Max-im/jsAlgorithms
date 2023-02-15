'use strict';

/**
 * @abstract
 * @class Compare
 *
 */
class Compare {
  /**
   *
   * @param {*} one - first argument for compare
   * @param {*} two - second argument for compare
   * @returns {boolean}
   */
  isEqual(one, two) {
    return JSON.stringify(one) === JSON.stringify(two);
  }
}

module.exports = Compare;
