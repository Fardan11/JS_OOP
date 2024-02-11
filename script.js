'use strict';

//constructor (function class)
//dont create a method in a constructor function

const Person = function (firstName, birthyear) {
  //instance properties
  this.firstName = firstName;
  this.birthyear = birthyear;
};

const myName = new Person('fardan', 2000);

console.log(myName);

const p2 = new Person('matilda', 1999);
console.log(p2);

//prototypes  possessing the inherited
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthyear);
};
myName.calcAge();
