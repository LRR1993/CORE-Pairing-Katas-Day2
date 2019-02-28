const { expect } = require('chai');
const checkUsernames = require('../katas/checkUsernames');

describe('checkUsernames', () => {
  it('check the length of the username is >= 5 and <=20', () => {
    expect(checkUsernames('a')).to.equal(false);
    expect(checkUsernames('hellllo')).to.equal(true);
    expect(checkUsernames('helllloasdxfghjkldxfcgvhj')).to.equal(false);
  });
  it('check characters in username', () => {
    expect(checkUsernames('natasha')).to.equal(true);
    expect(checkUsernames('HAY7_*h')).to.equal(false);
  });
});
