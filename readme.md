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