/* Created on 05/01/2018. */
var page = require('webpage').create();
page.open('http://www.sample.com', function() {
    page.includeJs("http://path/to/jquery.min.js", function() {
        page.evaluate(function() {
            $("button").click();
        });
        phantom.exit()
    });
});