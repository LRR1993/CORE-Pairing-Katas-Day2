const { expect } = require('chai');
const sumArgs = require('../katas/sumArgs');

describe('sumArgs', () => {
  it('returns the some of one argrument', () => {
    expect(sumArgs()).to.equal(0);
    expect(sumArgs(1)).to.equal(1);
    expect(sumArgs(2)).to.equal(2);
  });
  it('returns the some of two argruments', () => {
    expect(sumArgs(1, 0)).to.equal(1);
    expect(sumArgs(1, 2)).to.equal(3);
  });
  it('returns the some of three or more argruments', () => {
    expect(sumArgs(1, 0, 5, 6)).to.equal(12);
    expect(sumArgs(1, 2, 1, 1)).to.equal(5);
  });
});
