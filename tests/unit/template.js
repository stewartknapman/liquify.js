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
    assert.equal(typeof template.render, 'function');
  });

});
