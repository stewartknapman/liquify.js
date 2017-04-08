var assert = require('chai').assert;
var Template = require('../../lib/liquify/template.js');

describe('Template', function() {

  it('accepts a template string to its constructor', function () {
    var src = 'hello {{ user.name }}';
    var template = new Template(src);

    assert.equal(template.src, src);
  });

  it('throws a no template error if no template string was given', function () {
    try {
      var template = new Template();
    } catch (e) {
      assert.equal(e.message, 'No template source given');
    }
  });

  it('has a render method', function () {
    var src = 'hello {{ user.name }}';
    var template = new Template(src);
    assert.typeOf(template.render, 'function');
  });

  it('accepts a json object to its render method', function () {
    var output;
    var src = 'hello {{ user.name }}';
    var template = new Template(src);

    output = template.render();
    assert.equal(output, undefined);

    output = template.render('');
    assert.equal(output, undefined);

    output = template.render([]);
    assert.notEqual(output, undefined);

    output = template.render({});
    assert.notEqual(output, undefined);
  });

  it('returns a rendered liquid template', function () {
    var src = 'hello {{ user.name }}';
    var template = new Template(src);
    var output = template.render({ "user": { "name": "Stewart" } });

    assert.typeOf(output, 'string');
    assert.equal(output, 'hello Stewart');
  });

  it('renders different outputs from the same template given different data');

});
