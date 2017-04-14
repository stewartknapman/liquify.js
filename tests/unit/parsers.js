var assert = require('chai').assert;
var Parsers = require('../../lib/liquify/parsers.js');

describe('Parsers', function () {

  it('is a singleton', function () {
    var parsers = new Parsers();
    var parsers2 = new Parsers();

    assert.equal(parsers, parsers2);
  });

  it('has a parser property as a regexp', function () {
    var parsers = new Parsers();
    assert.isTrue(parsers.hasOwnProperty('templateParser'));
    assert.isTrue(parsers.templateParser instanceof RegExp);
  });

});
