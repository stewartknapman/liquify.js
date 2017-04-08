var Template = require('./liquify/template.js');

var instance;
var Liquify = function () {
  if (!instance) {
    instance = this;
  }
  return instance;
};

Liquify.prototype.parse = function (templateStr) {
  if (typeof templateStr !== 'string') {
    return;
  }
  return new Template();
};

module.exports = Liquify;
