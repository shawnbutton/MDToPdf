// you MIGHT need to run the following first to install phantomjs (especially on mac?):
// node node_modules/phantomjs-prebuilt/install.js
//https://www.bountysource.com/issues/40330704-typeerror-bad-argument
//https://github.com/Medium/phantomjs/issues/533



var markdownpdf = require("markdown-pdf");


markdownpdf().from("/Users/shawnbutton/Documents/Programming/projects/training-java/katas/src/main/java/romannumeralcalculator/roman_numeral_calculator.md").to("md.pdf", function () {
    console.log("Done")
});

