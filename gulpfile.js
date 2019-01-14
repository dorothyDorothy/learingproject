const { src, dest, watch, series, parallel } = require('gulp');
const compsr = require('gulp-composer');
const exec = require('child_process').exec;

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



function composerInstall() {
  return compsr.composer('install');
}


/* --- Php Unit --- */
function unitTests(cb) {
  exec('./vendor/bin/phpunit', function(err, stdout, stderr){
    console.log(stdout);
    console.log(stderr);
    cb(err);    
  });
  
}


function watcher () {
  // simpleBs();


  watch(['./composer.json'], 
    series(composerInstall)
    );

  watch([appFiles.php],
    series(unitTests)
    );  
}


exports.default = watcher;