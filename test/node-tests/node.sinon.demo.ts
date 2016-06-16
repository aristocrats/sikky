import SinonDemo from '../../src/sinon_demo';
import * as chai from 'chai';
import * as sinon from 'sinon';

describe('Sinon’s Spy', () => {

    it('should call the callback function', () => {
        const callback: any = sinon.spy();

        SinonDemo(true, callback);

        chai.assert(callback.calledOnce);
    });
});

describe('Sinon’s Assertions', () => {
    it('should call the callback function', () => {
        const callback: any = sinon.spy();

        SinonDemo(true, callback);

        sinon.assert.calledOnce(callback);
    });
});