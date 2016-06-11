/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

import Sikky from '../src/sikky';
import { expect } from 'chai';

describe("should return sum", () => {

it("should return sum", () => {
    const sum: number = Sikky(1, 1);
    expect(sum).to.eql(2);
});

});