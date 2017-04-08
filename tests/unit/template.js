var assert = require('chai').assert;
var Template = require('../../lib/liquify/template.js');

describe('Template', function() {

  it('accepts a template string to its constructor', function () {
    var src = 'hello {{ user.name }}';
    var template = new Template(src);

    assert.equal(template.src, src);
  });

  it('has a render method', function () {
    var template = new Template();
    assert.typeOf(template.render, 'function');
  });

  it('accepts a json object to its render method', function () {
    var output;
    var template = new Template();

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
