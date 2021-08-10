const { MarkdownBuild, MarkdownParser, MarkdownEscaper } = require('../lib/index');

console.log(MarkdownBuild.bold('Bold build'));
console.log(MarkdownEscaper.bold('**Bold escaped**'));
console.log(MarkdownParser.userNickname('<@!0000000000000>'));