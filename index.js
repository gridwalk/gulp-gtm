'use strict';

var through = require('through2');

module.exports = function (opts) {
    opts = opts || {};
    opts.containerId = opts.containerId || 'GTM-1234';
    opts.dataLayerName = opts.dataLayerName || 'dataLayer';

    return through.obj(function (file, enc, cb) {
        if (file.isNull()) return cb(null, file)
        if (file.isStream()) return cb(new Error('gulp-gtm: streams not supported'))

        var onHead = "\n" +
            "<!-- Google Tag Manager -->" +
            "<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':" +
            "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0]," +
            "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=" +
            "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);" +
            "})(window,document,'script','" + opts.dataLayerName + "','" + opts.containerId + "');</script>" +
            "<!-- End Google Tag Manager -->\n" +
            "</head>";

        var onBody = "<body>\n" +
            "<!-- Google Tag Manager (noscript) -->" +
            "<noscript><iframe src='https://www.googletagmanager.com/ns.html?id=" + opts.containerId + "'" +
            "height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript>" +
            "<!-- End Google Tag Manager (noscript) -->";

        var content = file.contents.toString()
        content = content.replace('</head>', onHead).replace('<body>', onBody);
        file.contents = new Buffer(content)
        cb(null, file)
    })
}