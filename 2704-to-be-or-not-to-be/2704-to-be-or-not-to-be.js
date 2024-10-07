/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(value1) {
  function toBe(val) {
    if (val === value1) {
      return true;
    } else {
      throw new Error('Not Equal');
    }
  }

  function notToBe(value) {
    if (value !== value1) {
      return true;
    } else {
      throw new Error('Equal');
    }
  }

  return { toBe, notToBe };

};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */