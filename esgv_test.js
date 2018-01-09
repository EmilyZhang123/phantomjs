/* Created on 05/01/2018. */
var page = require('webpage').create();


page.viewportSize = { width: 1200, height: 700 };

page.open('https://10.21.5.11/account/login/',function (status) {
    console.log('Status: ' + status);
    page.includeJs("http://code.jquery.com/jquery-3.2.1.slim.js", function() {
        page.evaluate(function() {
            $('#id_username').val('esgv');
            $('#id_password').val('esgv#maldun');
            $('button[type=submit]').trigger('click')
        });

        window.setTimeout(function () {
            page.render('esgv.jpeg', {format: 'jpeg', quality: '100'});
            phantom.exit();
        },500);
    });
    // phantom.exit();

});





