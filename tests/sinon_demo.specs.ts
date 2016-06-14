import SinonDemo from '../src/sinon_demo';

describe('Sinon’s Spy', () => {

  it('should call the callback function', () => {
    const callback: Function = sinon.spy();

    SinonDemo(true, callback);

    assert(callback.calledOnce);
  });
});

describe('Sinon’s Assertions', () => {
  it('should call the callback function', () => {
    const callback: Function = sinon.spy();

    SinonDemo(true, callback);

    sinon.assert.calledOnce(callback);
  });
});