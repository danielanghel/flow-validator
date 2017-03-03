// @flow
/* eslint-env mocha, es6 */

import { expect } from 'chai';

import { Vobject, string, number, instanceOf, ValidationError, VType } from '../src';

describe('ValidationError', () => {
  it('is instance of itself', () => {
    expect((new ValidationError({ expected: string, got: null })) instanceof ValidationError).to.equal(true);
  });
});

describe('mocha async test', () => {
  it('works', async () => { await Promise.resolve(); });
  it('works', async () => {
    try { await Promise.reject(new ValidationError({ expected: string, got: void 0 })); }
    catch (e) { expect(e).to.be.instanceof(ValidationError); }
  });
});


describe('VType', () => {
  it('inherits', () => {
    expect(new VType('custom', v => v)).to.have.property('validate');
  });
});

describe('basic', () => {
  it('works', () => {
    Vobject({ a: number, g: string }).validate({ a: 3, g: 'hello' });
    //try { object({ a: number, g: string }).validate({ a: 5 }) } catch (e) { console.log(JSON.stringify(e.toJSON(), null, 2)) }
    expect(() => Vobject({ a: number, g: string }).validate({})).to.throw;
  });
});

describe('transformation chain', () => {
  it('works', () => {
    expect(string.to(s => new Date(s)).to(instanceOf(Date).parse).parse('')).to.be.instanceof(Date);
    expect(string.to(s => new Date(s)).chain(instanceOf(Date)).parse('')).to.be.instanceof(Date);
  });
});

describe('error JSON', () => {
  it('works', () => {
    try {
      string.validate(3);
    } catch (e) {
      expect(e).instanceof(ValidationError);
      expect(e.toJSON()).to.deep.equal({ expected: { name: 'string' }, got: 3 });
    }
  });
  it('works with custom error', () => {
    try {
      string.Vrefine((s, error) => { if (s === 'hello') return s; throw error('must be hello'); }).validate('helo');
    } catch (e) {
      expect(e).instanceof(ValidationError);
      expect(e.toJSON()).to.deep.equal({ expected: { name: 'refined' }, got: 'helo', description: 'must be hello' });
    }
  });

});
