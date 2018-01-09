/* Created on 05/01/2018. */
/*
* render方法用于将网页保存成图片，参数就是指定的文件名。
* 该方法根据后缀名，将网页保存成不同的格式，目前支持PNG、GIF、JPEG和PDF。
*
* viewportSize属性指定浏览器视口的大小，即网页加载的初始浏览器窗口大小。Height字段必须指定，不可省略。
*
* zoomFactor属性用来指定渲染时（render方法和renderBase64方法）页面的放大系数，默认是1（即100%）。
* */
var page = require('webpage').create();
page.viewportSize = { width: 1920, height: 1080 };
page.open('https://www.bilibili.com/', function start(status) {
    page.render('bilibili.jpeg', {format: 'jpeg', quality: '100'});
    phantom.exit();
});