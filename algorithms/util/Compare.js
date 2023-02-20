'use strict';

class Compare {
  /**
   *
   * @param {*} one - first argument for compare
   * @param {*} two - second argument for compare
   * @return {boolean}
   */
  isEqual(one, two) {
    return JSON.stringify(one) === JSON.stringify(two);
  }
}

module.exports = Compare;
