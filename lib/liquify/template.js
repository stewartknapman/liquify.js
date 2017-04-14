// TODO:
//  - extract parser into object for testing

var Tokens = require('./tokens.js');

var Template = function(src, parsers) {
  this.noTemplateError = 'No template source given';

  if (typeof src === 'string') {
    this.src = src;
    this.parsers = parsers;
    this.tokens = new Tokens(this.src, this.parsers);
    
    this.nodeList = [];
    this._parse();

  } else {
    throw new Error(this.noTemplateError);
  }
};

Template.prototype.render = function (data) {
  if (typeof data !== 'object') {
    return;
  }
  return '';
};

// Private
Template.prototype._parse = function () {
  var token = this.tokens.shift();
  while (token) {

    // https://github.com/mattmccray/liquid.js/blob/master/source/block.js#L9
    // https://github.com/Shopify/liquid/blob/master/lib/liquid/block_body.rb#L15

    token = this.tokens.shift();
  }
};

module.exports = Template;
