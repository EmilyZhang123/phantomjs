/* Created on 05/01/2018. */
/**
 * onResourceRequested属性用来指定一个回调函数，当页面请求一个资源时，会触发这个回调函数。它的第一个参数是HTTP请求的元数据对象，第二个参数是发出的网络请求对象。

 HTTP请求包括以下字段。
 id：所请求资源的编号
 method：使用的HTTP方法
 url：所请求的资源 URL
 time：一个包含请求时间的Date对象
 headers：HTTP头信息数组
 *
 * 网络请求对象包含以下方法。
 abort()：终止当前的网络请求，这会导致调用onResourceError回调函数。
 changeUrl(newUrl)：改变当前网络请求的URL。
 setHeader(key, value)：设置HTTP头信息。
 * */
var page = require('webpage').create();
var requestData={};
page.onResourceRequested = function(requestData, networkRequest) {
    console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
};

/**
 * onResourceReceived属性用于指定一个回调函数，当网页收到所请求的资源时，就会执行该回调函数。它的参数就是服务器发来的HTTP回应的元数据对象
 id：所请求的资源编号
 url：所请求的资源的URL r- time：包含HTTP回应时间的Date对象
 headers：HTTP头信息数组
 bodySize：解压缩后的收到的内容大小
 contentType：接到的内容种类
 redirectURL：重定向URL（如果有的话）
 stage：对于多数据块的HTTP回应，头一个数据块为start，最后一个数据块为end。
 status：HTTP状态码，成功时为200。
 statusText：HTTP状态信息，比如OK。
 *
 * 如果HTTP回应非常大，分成多个数据块发送，onResourceReceived会在收到每个数据块时触发回调函数。
 * */

page.onResourceReceived = function(response) {
    console.log('Response (#' + response.id + ', stage "' + response.stage + '"): ' + JSON.stringify(response));
};