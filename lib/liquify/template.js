// TODO:
//  - extract tokens into object for testing
//  - extract parser into object for testing

var Template = function(src, parsers) {
  this.noTemplateError = 'No template source given';

  if (typeof src === 'string') {
    this.src = src;
    this.parsers = parsers;
    this.nodeList = [];

    this._init();
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
Template.prototype._init = function () {
  this.tokens = this._tokenize(this.src);
  this._parse();
};

Template.prototype._tokenize = function (src) {
  var templateParser = new RegExp(this.parsers.templateParser);
  var tokens = src.split(templateParser);

  // removes the rogue empty element at the beginning of the array
  if (tokens[0] == ''){
    tokens.shift();
  }

  return tokens;
};

Template.prototype._parse = function () {
  var token = this.tokens.shift();
  while (token) {

    // https://github.com/mattmccray/liquid.js/blob/master/source/block.js#L9
    // https://github.com/Shopify/liquid/blob/master/lib/liquid/block_body.rb#L15

    token = this.tokens.shift();
  }
};

module.exports = Template;
