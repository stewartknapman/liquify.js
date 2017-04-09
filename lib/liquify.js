var Template = require('./liquify/template.js');
var parsers = require('./liquify/parsers.js');

var instance;
var Liquify = function () {
  this.parsers = parsers;

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
