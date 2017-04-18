const should = require('chai').should();

const adder = require('../fizzBuzzer');


describe('fizzBuzzer', function() {

  // test the normal cases
  it('outputs fizz-buzz for multiple of 15', function() {

    const fizzBuzzCases = [15, 30, 45];

    //never defined the function name in fizzBuzzer.js so 
    //is that a problem?
    fizzBuzzCases.forEach(function(item) {
      fizzBuzzer(item).should.equal('fizz-buzz');
    });
  });

  it('outputs buzz for multiples of 5', function() {

    const buzzCases = [5, 10, 15];

    buzzCases.forEach(function(item) {
      fizzBuzzer(item).should.equal('buzz');
    });
  });

   it('outputs buzz for multiples of 3', function() {

    const fizzCases = [3, 6, 9];

    fizzCases.forEach(function(item) {
      fizzBuzzer(item).should.equal('fizz');
    });
  });

  it('should raise error if input is not a number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = ['dog', true, false];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});