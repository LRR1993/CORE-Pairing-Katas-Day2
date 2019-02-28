const { expect } = require('chai');
const caesarCipher = require('../katas/caesarCipher');

describe('caesarCipher', () => {
  it('checks a single letter that is caesarCiphered ', () => {
    expect(caesarCipher('a', 1)).to.equal('b');
    expect(caesarCipher('a', 5)).to.equal('f');
    expect(caesarCipher('d', -2)).to.equal('b');
  });
  it('checks multiple letters to be caesarCiphered ', () => {
    expect(caesarCipher('aaa', 1)).to.equal('bbb');
    expect(caesarCipher('abc', 3)).to.equal('def');
    expect(caesarCipher('def', -3)).to.equal('abc');
  });
  it('checks a phrase to be caesarCiphered ', () => {
    expect(caesarCipher('hello world!', -3)).to.equal('ebiil tloia!');
  });
});
