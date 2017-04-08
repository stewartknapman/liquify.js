var Template = function(src) {

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
    this.tokens = this._tokenize(this.src);
  } else {
    throw new Error('No template source given');
  }
};

Template.prototype.render = function (data) {
  if (typeof data !== 'object') {
    return;
  }

  return '';
};

// Private
Template.prototype._tokenize = function (src) {
  var templateParser = new RegExp(this.templateParser);
  var tokens = src.split(templateParser);


  // console.log(this.templateParser, tokens);
};

module.exports = Template;
