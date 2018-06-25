'use strict';

var config = require('../../include_module/js/config.js');
var env = process.env.NODE_ENV || 'development';
var cdn = process.env.FM_CDN || config[env].cdn;

var moduleSrc = '../../include_module/';
var DIST = '../../../../dist/pc/special/whx1/';
var output = '../../../../dist/pc/special/';

var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var clean = require('gulp-clean');
var cssmin = require('gulp-cssmin');
var less = require('gulp-less');
var hash = require('gulp-hash');
var htmlreplace = require('gulp-html-replace');
var fileinclude = require('gulp-file-include');
var uglify = require('gulp-uglify');
  
gulp.task("clean", function(){
    return gulp.src(DIST)
        .pipe(clean({force: true}))
        .pipe(gulp.dest(output));
});

gulp.task('imagemin', function () {
  return gulp.src('./images/**')
    .pipe(gulp.dest(DIST + '/images'));
});

gulp.task('less', function(cb) {
  return gulp.src('./styles/*.less')
      .pipe(less())
      .pipe(cssmin())
      .pipe(gulp.dest(DIST + '/styles'))
      .pipe(hash()) // hash css file name
      .pipe(gulp.dest(DIST + '/styles/'))
      .pipe(hash.manifest(DIST + '/assets.json', {
          deleteOld: true,
          sourceDir: DIST
      }))
      .pipe(gulp.dest('.'));
});

gulp.task('hashjs', function(cb) {
    return gulp.src([moduleSrc + 'js/staticvcode.js', moduleSrc + 'js/retcode.js'])
        .pipe(uglify({
            mangle: { toplevel: true }
        }))
        .pipe(hash())
        .pipe(gulp.dest(DIST + '/scripts/'))
        .pipe(hash.manifest(DIST + '/assets.json', {
            deleteOld: true,
            sourceDir: DIST
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('fileinclude', function() {
  var ass = require(DIST + '/assets.json');
  return gulp.src(['./*.html'])
      .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file',
          context: {
              cdn: cdn
          }
      }))
      .pipe(htmlreplace({
        'buildvcodejs': '/special/whx1/scripts/' + ass['staticvcode.js'],
        'buildretcodejs': '/special/whx1/scripts/' + ass['retcode.js'],
        'buildcss': '/special/whx1/styles/' + ass['style.css']
      }))
      .pipe(gulp.dest(DIST));
});

gulp.task('default', gulpSequence('clean', 'imagemin', ['less', 'hashjs'], 'fileinclude'))