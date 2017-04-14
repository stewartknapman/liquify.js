/*

  Setup new liquid object
  class accepts:
   - custom tag drops
   - custom filter drops
   - custom method for finding includes

  var liquify = new Liquify({
    tags: {
      newTag: function () {} // TODO: params and return value
    },
    filters: {
      newFilter: function () {} // TODO: params and return value
    },
    include: function () {} // TODO: params and return value
  });

  Parse template
  (seperate from render so you can reuse the template fast? does this help/matter?
   I guess we don't want to be regexing on the string everytime we want to render)

  var template = liquify.parse('hello {{ user.name }}');

  Render template
  output => 'hello Stewart'

  template.render({ "user": { "name": "Stewart" } });

*/

require('jsdom-global')();
var fs = require('fs');
var assert = require('chai').assert;
var fixture = fs.readFileSync('./tests/fixtures/liquify.html', 'utf8');
var Liquify = require('../../lib/liquify.js');

describe('Liquify.js', function() {

  beforeEach(function () {
    document.body.innerHTML = fixture;
  });

  it('renders a basic liquid template', function () {
    var liquify = new Liquify();
    var template = liquify.parse('hello {{ user.name }}');
    var output = template.render({ "user": { "name": "Stewart" } });

    assert.equal(output, 'hello Stewart');
  });

  //  TODO: this!
  it('renders a complex liquid template', function () {
    var src = document.querySelector('#input').innerHTML;
    var expectedOutput = document.querySelector('#output').innerHTML;
    var data = {
      "products": [
        { "title": "Example Product 1" },
        { "title": "Example Product 2" },
        { "title": "Example Product 3" }
      ]
    };

    var liquify = new Liquify();
    var template = liquify.parse(src);
    var output = template.render(data);

    assert.equal(output, expectedOutput);
  });

});
