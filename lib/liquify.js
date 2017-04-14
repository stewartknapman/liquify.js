var Template = require('./liquify/template.js');
var Parsers = require('./liquify/parsers.js');

var instance;
var Liquify = function () {
  this.parsers = new Parsers();

  if (!instance) {
    instance = this;
  }
  return instance;
};

Liquify.prototype.parse = function (templateSrc) {
  if (typeof templateSrc !== 'string') {
    return;
  }
  return new Template(templateSrc, this.parsers);
};

module.exports = Liquify;
