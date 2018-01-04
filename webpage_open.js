/* Created on 04/01/2018. */
var webPage = require('webpage');
var page = webPage.create();
// var page = require('webpage').create();

/*page.open('https://www.bilibili.com/', function (s) {
    console.log(s);
    phantom.exit();
});*/

/*var postBody = 'user=username&password=password';

page.open('https://www.bilibili.com/', 'POST', postBody, function(status) {
    console.log('Status: ' + status);
    // Do other things here...
});*/


var settings = {
    operation: "POST",
    encoding: "utf8",
    headers: {
        "Content-Type": "application/json"
    },
    data: JSON.stringify({
        some: "data",
        another: ["custom", "data"]
    })
};

page.open('http://your.custom.api', settings, function(status) {
    console.log('Status: ' + status);
    // Do other things here...
});