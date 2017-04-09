module.exports = {
  tagStart: '\{\%',
  tagEnd: '\%\}',
  variableStart: '\{\{',
  variableEnd: '\}\}',
  variableIncompleteEnd: '\}\}?',
  anyStartingTag: this.tagStart +'|'+ this.variableStart,
  partialTemplateParser: this.tagStart +'.*?'+ this.tagEnd +'|'+ this.variableStart +'.*?'+ this.variableIncompleteEnd,
  templateParser: '('+ this.partialTemplateParser +'|'+ this.anyStartingTag +')'
};
