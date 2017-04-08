var assert = require('chai').assert;
var Liquify = require('../../lib/liquify.js');
var Template = require('../../lib/liquify/template.js');

describe('Liquify', function() {

  it('is a singelton');

  it('accepts custom tags');

  it('accepts custom filter');

  it('accepts a custom method for includes');

  describe('API', function() {

    it('has a parse method');

    it('accepts a string to its parse method');

    it('returns a template from the parse method', function () {
      var liquify = new Liquify();
      var template = liquify.parse('');

      assert.equal(template.constructor, Template);
    });

  });
});
