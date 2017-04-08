var Template = function(src) {
  this.noTemplateError = 'No template source given';

  // TODO:
  //  - extract tokens into object for testing
  //  - extract parser into object for testing
  //  - extract regexps into object

  this.tagStart = '\{\%';
  this.tagEnd = '\%\}';
  this.variableStart = '\{\{';
  this.variableEnd = '\}\}';
  this.variableIncompleteEnd = '\}\}?';
  this.anyStartingTag = this.tagStart +'|'+ this.variableStart;
  this.partialTemplateParser = this.tagStart +'.*?'+ this.tagEnd +'|'+ this.variableStart +'.*?'+ this.variableIncompleteEnd;
  this.templateParser = '('+ this.partialTemplateParser +'|'+ this.anyStartingTag +')';

  if (typeof src === 'string') {
    this.src = src;
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
  var templateParser = new RegExp(this.templateParser);
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
