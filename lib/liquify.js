var Template = require('./liquify/template.js');

var instance;
var Liquify = function () {
  if (!instance) {
    instance = this;
  }
  return instance;
};

Liquify.prototype.parse = function (templateSrc) {
  if (typeof templateSrc !== 'string') {
    return;
  }
  return new Template(templateSrc);
};

module.exports = Liquify;
