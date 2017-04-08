var assert = require('chai').assert;
var Template = require('../../lib/liquify/template.js');

describe('Template', function() {

  it('has a render method', function () {
    var template = new Template();
    assert.equal(typeof template.render, 'function');
  });

});
