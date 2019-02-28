const sumDigits = require('../katas/sumDigits');
const { expect } = require('chai');

describe('sumDigits', () => {
  it('tests the sum of the numbers', () => {
   expect(sumDigits(1)).to.equal(1)
   expect(sumDigits(11)).to.equal(2)
  
  });

  it ('test the sum if they are integers',() => {
    expect(sumDigits(1.0)).to.equal(1)
    expect(sumDigits(1.1)).to.equal(2)
    expect(sumDigits(10.5)).to.equal(6)
  });
});
