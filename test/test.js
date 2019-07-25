const solution = require('../solution.js');
const assert = require('assert');

describe('Basic Mocha Test', function() {
  it('correctly merges [1,4] and [4,5]', () => {
    assert.equal(solution.merge([[1,4],[4,5]]), [[1,5]]);
  })

  it('correctly merges [1,3],[2,6],[8,10] and [15,18]', () => {
    assert.equal(solution.merge([[1,3],[2,6],[8,10],[15,18]]), [[1,6],[8,10],[15,18]]);
  })
})
