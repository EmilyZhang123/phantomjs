/* Created on 04/01/2018. */
/*
* evaluate方法用于打开网页以后，在页面中执行JavaScript代码。
* 网页内部的console语句，以及evaluate方法内部的console语句，默认不会显示在命令行。
* 这时可以采用onConsoleMessage回调函数
* */
var page = require('webpage').create();

page.open('https://www.bilibili.com/', function(status) {
    var allkey = page.evaluate(function() {
        var key=[];
        for (var i in document){
           key.push(i);
        }
        // return document.title;
        return key
    });
    console.log(allkey);
   // console.log(document);
    phantom.exit();
});


/*

page.onConsoleMessage = function(msg) {
    console.log('Page title is ' + msg);
};

page.open('https://www.bilibili.com/', function(status) {
    page.evaluate(function() {
        console.log(document.title);
        // console.log(document);
    });
    phantom.exit();
});*/
