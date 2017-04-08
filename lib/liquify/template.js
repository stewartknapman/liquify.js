var Template = function(src) {
  this.src = src;
};

Template.prototype.render = function (data) {
  if (typeof data !== 'object') {
    return;
  }

  return '';
};

module.exports = Template;
