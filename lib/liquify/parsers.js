var instance;
var Parsers = function () {
  var whitespaceControl = '-';
  var tagStart = '\{\%';
  var tagStartBeginning = '^\{\%';
  var tagEnd = '\%\}';
  var variableStart = '\{\{';
  var variableStartBeginning = '^\{\{';
  var variableEnd = '\}\}';
  var variableIncompleteEnd = '\}\}?';
  var anyStartingTag = tagStart +'|'+ variableStart;
  var partialTemplateParser = tagStart +'.*?'+ tagEnd +'|'+ variableStart +'.*?'+ variableIncompleteEnd;
  var templateParser = '('+ partialTemplateParser +'|'+ anyStartingTag +')';
  var contentOfVariable = '^'+ variableStart + whitespaceControl +'?(.*?)'+ whitespaceControl +'?'+ variableEnd +'$';

  this._parsers = {
    'whitespaceControl': whitespaceControl,
    'tagStart': tagStart,
    'tagStartBeginning': tagStartBeginning,
    'tagEnd': tagEnd,
    'variableStart': variableStart,
    'variableStartBeginning': variableStartBeginning,
    'variableEnd': variableEnd,
    'variableIncompleteEnd': variableIncompleteEnd,
    'anyStartingTag': anyStartingTag,
    'partialTemplateParser': partialTemplateParser,
    'templateParser': templateParser,
    'contentOfVariable': contentOfVariable
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
