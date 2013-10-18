'use strict';

var expect = require('expect.js');

describe('The Test', function () {
  it('the test should pass', function () {
    expect(true).to.be.ok();
  });

  it('the object is not null', function () {
    var myObject = {};

    expect(myObject).to.be.ok();
  });
});