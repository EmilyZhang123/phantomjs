/* Created on 04/01/2018. */
var page = require('webpage').create();

page.open('https://www.bilibili.com/', function(status) {
/*    var title = page.evaluate(function() {
        return document.title;
    });*/
    var document = page.evaluate(function() {
        return document.body;
    });
    // console.log('Page title is ' + title);
   console.log(document);
    phantom.exit();
});
