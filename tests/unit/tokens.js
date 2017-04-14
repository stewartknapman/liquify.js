var assert = require('chai').assert;
var Tokens = require('../../lib/liquify/tokens.js');
var Parsers = require('../../lib/liquify/parsers.js');
var parsers = new Parsers();

describe('Tokens', function() {

  it('tokenizes the string', function () {
    var tokens = new Tokens('hello {{ user.name }}', parsers);
    var expected = ['hello ', '{{ user.name }}'];

    assert.equal(tokens.tokens[0], expected[0]);
    assert.equal(tokens.tokens[1], expected[1]);
  });

  describe('shift()', function () {

    it('has a shift method', function () {
      var tokens = new Tokens('', parsers);

      assert.typeOf(tokens.shift, 'function');
    });

    it('returns a token', function () {
      var tokens = new Tokens('hello {{ user.name }}', parsers);
      var expected = ['hello ', '{{ user.name }}'];

      assert.equal(tokens.shift(), expected[0]);
      assert.equal(tokens.shift(), expected[1]);
    });

  });

});
