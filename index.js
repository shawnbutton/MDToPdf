//Uses markdownpdf
//https://www.npmjs.com/package/markdown-pdf

// you MIGHT need to run the following first to install phantomjs (especially on mac?):
// node node_modules/phantomjs-prebuilt/install.js
//https://www.bountysource.com/issues/40330704-typeerror-bad-argument
//https://github.com/Medium/phantomjs/issues/533


var convert = require("./convert");

var inputFiles = ["sample/roman_numeral_calculator.md", "sample/gilded_rose.md"];
var outputName = "output.pdf";

convert(inputFiles, outputName);



