#! /usr/bin/env node

var fs = require('fs');
var path = require('path');

var marked = require('marked');
var TerminalRenderer = require('marked-terminal');

marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer()
});

var userArgs = process.argv.slice(2);
var fileName = userArgs[0];



var uri = path.isAbsolute(fileName)
          ? fileName
          : path.join(process.cwd(), fileName);

// it's fine to read synchronously fo this usecase
var contents = fs.readFileSync(uri, 'utf8');

console.log(marked(contents).trim());
