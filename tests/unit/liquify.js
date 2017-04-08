var assert = require('chai').assert;
var Liquify = require('../../lib/liquify.js');
var Template = require('../../lib/liquify/template.js');

describe('Liquify', function() {

  it('is a singelton', function () {
    var liquify1 = new Liquify();
    var liquify2 = new Liquify();
    assert.equal(liquify1, liquify2);
  });

  it('accepts custom tags');

  it('accepts custom filter');

  it('accepts a custom method for includes');

  describe('API', function() {

    it('has a parse method', function () {
      var liquify = new Liquify();
      assert.typeOf(liquify.parse, 'function');
    });

    it('accepts a string to its parse method', function () {
      var template;
      var liquify = new Liquify();

      template = liquify.parse();
      assert.equal(template, undefined);

      template = liquify.parse([]);
      assert.equal(template, undefined);

      template = liquify.parse({});
      assert.equal(template, undefined);

      template = liquify.parse('');
      assert.notEqual(template, undefined);
    });

    it('returns a template from the parse method', function () {
      var liquify = new Liquify();
      var template = liquify.parse('');
      assert.equal(template.constructor, Template);
    });

    it('passes the template source to the template object', function () {
      var src = 'hello {{ user.name }}';
      var liquify = new Liquify();
      var template = liquify.parse(src);
      assert.equal(template.src, src);
    });

  });
});
