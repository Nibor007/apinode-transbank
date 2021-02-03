const { it } = require('mocha');
const isPalindrome = require('../util/util');

const nock = require('nock');

const chai = require('chai'),
      expect = chai.expect,
      sinonChai = require('sinon-chai'),
      sinon = require('sinon');

chai.use(sinonChai);

describe('Describe Test', () => {


    it('Valida que sea palindromo ', () => {
        expect(  isPalindrome('131') ).to.equal(true);
    });

    it('Valida que no sea palindromo ', () => {
        expect(  isPalindrome('131a') ).to.equal(false);
    });

})
