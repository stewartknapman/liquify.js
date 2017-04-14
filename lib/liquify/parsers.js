var instance;
var Parsers = function () {
  var tagStart = '\{\%';
  var tagEnd = '\%\}';
  var variableStart = '\{\{';
  var variableEnd = '\}\}';
  var variableIncompleteEnd = '\}\}?';
  var anyStartingTag = tagStart +'|'+ variableStart;
  var partialTemplateParser = tagStart +'.*?'+ tagEnd +'|'+ variableStart +'.*?'+ variableIncompleteEnd;
  var templateParser = '('+ partialTemplateParser +'|'+ anyStartingTag +')';

  this._parsers = {
    'tagStart': tagStart,
    'tagEnd': tagEnd,
    'variableStart': variableStart,
    'variableEnd': variableEnd,
    'variableIncompleteEnd': variableIncompleteEnd,
    'anyStartingTag': anyStartingTag,
    'partialTemplateParser': partialTemplateParser,
    'templateParser': templateParser
  };

  for (var parser in this._parsers) {
    if (this._parsers.hasOwnProperty(parser)) {
      Object.defineProperty(this, parser, {
        value: new RegExp(this._parsers[parser])
      });
    };
  }

  if (!instance) {
    instance = this;
  }
  return instance;
};

module.exports = Parsers;
