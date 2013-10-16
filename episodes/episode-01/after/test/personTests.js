'use strict';
var expect = require('expect.js')
  , Person = require('../lib/models/person')
  ;

describe('Person', function () {

  describe('#contructor(parameters)', function () {
    it('should assign default parameters if passed', function () {
      var person = new Person();
    });

  });

})