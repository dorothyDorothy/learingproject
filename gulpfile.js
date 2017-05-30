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
gulp.task('composer', function(){
	plugins.composer('install');
});

/* --- Php Unit --- */
var exec = require('child_process').exec;
gulp.task('phpunit', function(cb){
	exec('./vendor/bin/phpunit', function(err, stdout, stderr){
    console.log(stdout);
    console.log(stderr);
    cb(err);		
	});
});


gulp.task('watch', function(){
	gulp.watch(['./composer.json'], [ 'composer'])
		.on('change', function(evt){
			changeEvent(evt);
		});
	gulp.watch([appFiles.php], [ 'phpunit'])
		.on('change', function(evt){
			changeEvent(evt);
		});		
});

gulp.task('default', ['composer', 'watch']);