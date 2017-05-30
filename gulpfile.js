var gulp = require('gulp');

var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});

/* --- File paths --- */
var basePaths = {
	root: '_src/',
  sass_source: '_src/scss/',
  js_source: '_src/js/',
  css_dest: 'deploy/html/css/',
  js_dest: 'deploy/html/js/'
};

var appFiles = {
	php: basePaths.root + '*.php'
};

/* --- gutils --- */

var gutil = require('gulp-util');
var changeEvent = function(evt) {
    gutil.log('File', gutil.colors.cyan(evt.path.replace(new RegExp('/.*(?=/' + basePaths.src + ')/'), '')), 'was', gutil.colors.magenta(evt.type));
};

/* --- Composer --- */
composer = require('gulp-composer');
gulp.task('composer', function(){
	composer('self-update');
});

/* --- Replace with something useful! --- */
gulp.task('thing' , function(){
	console.log("now calling thing");
});


gulp.task('watch', function(){
	gulp.watch(['./composer.json', appFiles.php], [ 'composer', 'thing'])
		.on('change', function(evt){
			changeEvent(evt);
		});
});

gulp.task('default', ['composer', 'watch']);