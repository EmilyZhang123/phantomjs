/* Created on 05/01/2018. */
var page = require('webpage').create();
/*
* 1、过滤资源 request.abort（）
* 处理页面的时候，有时不希望加载某些特定资源。这时，可以对URL进行匹配，一旦符合规则，就中断对资源的连接。
* */
/*page.onResourceRequested = function(requestData, request) {
    if ((/http:\/\/.+?\.css$/gi).test(requestData['url'])) {
        console.log('Skipping', requestData['url']);
        request.abort();
    }
};*/

/*
* 2、截图
*
settings.userAgent：指定HTTP请求的userAgent头信息，例子是手机浏览器的userAgent。
settings.viewportSize：指定浏览器窗口的大小，这里是400x600。
evaluate()：用来在网页上运行Javascript代码。在这里，我们抓取，然后修改背景颜色，并返回该条新闻的标题。
clipRect：用来指定网页截图的大小，这里的截图左上角从网页的(0. 0)坐标开始，宽600像素，高700像素。如果不指定这个值，就表示对整张网页截图。
render()：根据clipRect的范围，在当前目录下生成以的名字命名的截图。
* */

page.settings.userAgent = 'WebKit/534.46 Mobile/9A405 Safari/7534.48.3';
page.settings.viewportSize = { width: 400, height: 600 };

page.open('https://www.bilibili.com/', function (status) {
    if (status !== 'success') {
        console.log('Unable to load!');
        phantom.exit();
    } else {
        var title = page.evaluate(function () {
            var posts = document.getElementsByClassName("t");
            posts[0].style.color = "#FFF";
            return document.title;
        });

        window.setTimeout(function () {
            page.clipRect = { top: 0, left: 0, width: 1920, height: 700 };
            page.render(title + "1.png");
            page.clipRect = { left: 0, top: 600, width: 400, height: 600 };
            page.render(title + '2.png');
            phantom.exit();
        }, 1000);
    }
});

/*
* 3、抓取图片
*
rasterize.js，可以抓取网络上的图片，将起保存在本地。或者PDF

phantomjs rasterize.js http://ariya.github.com/svg/tiger.svg tiger.png

phantomjs rasterize.js 'http://en.wikipedia.org/w/index.php?title=Jakarta&printable=yes' jakarta.pdf
* */


/*
* 4、生成网页
*
使用content方法指定网页的HTML代码。
* */