var Tokens = function (src, parsers) {
  this.src = src;
  this.parsers = parsers;
  this.tokens = this._tokenize();
};

Tokens.prototype.shift = function () {
  return this.tokens.shift();
};

// Private
Tokens.prototype._tokenize = function () {
  var templateParser = new RegExp(this.parsers.templateParser);
  var tokens = this.src.split(templateParser);

  // removes the rogue empty element at the beginning of the array
  if (tokens[0] == ''){
    tokens.shift();
  }

  return tokens;
};

module.exports = Tokens;
