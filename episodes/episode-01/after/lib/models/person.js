'use strict';

function Person(parameters) {

  parameters = parameters || {
    gender: "M"
  };

  this.firstName = parameters.firstName;
  this.lastName = parameters.lastName;
  this.age = parameters.age;
  this.gender = parameters.gender;
  this.ssn = parameters.ssn;
}

module.exports = Person;
