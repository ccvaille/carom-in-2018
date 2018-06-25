'use strict'

var config = require('../config.js');

// process.env 返回一个包含用户环境信息的对象
var env = process.env.NODE_DEV || 'development';
var cdn = process.env.FM_CDN || config[env].cdn;


var DIST = '../../dist/demo/'
var output

var gulp = require('gulp');
// gulp-sequence 按顺序逐个同步地运行任务
var gulpSequence = require('gulp-sequence');
// 不推荐了，推荐用官方 del
// var clean = require('gulp-clena');
var del = require('del');

gulp.task('clean', function(){
    return del('dist/*')
})


// gulp.task('default', gulpSequence('del', 'imagemin', ['less', 'hashjs'], 'fileinclude'))

// gulp.task('default', gulpSequence('clean'));
gulp.task('default', ['clean']);