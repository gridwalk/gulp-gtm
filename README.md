# gulp-gtm

> Inject Google Tag Manager (GTM) script into HTML <head> with Gulp.

#### Install

```bash
$ npm install gulp-gtm --save-dev
```

## Example

```js
var gulp = require('gulp')
var gtm  = require('gulp-gtm')

// Usage:
gulp.task('gtm', function(){
	gulp.src('./index.html')
	.pipe(gtm({containerId: 'GTM-1234'}))
	.pipe(gulp.dest('./'));
});

```

The following code will be insterted directly after the opening <body> tag:
```html
<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-XXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXX');</script>
<!-- End Google Tag Manager -->
```
