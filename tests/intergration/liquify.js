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

describe('Liquify.js', function() {

  beforeEach(function () {
    document.body.innerHTML = fixture;
  });

  it('renders a liquid template');

});
