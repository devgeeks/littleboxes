
var gulp         = require('gulp');
var shell        = require('gulp-shell');
var concat       = require('gulp-concat');
var less         = require('gulp-less');
var path         = require('path');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss    = require('gulp-minify-css');

var lessFiles = [
  'src/boxes/*.less'
];

var browsers = ['Chrome', 'Safari', 'Android', 'Blackberry', 'Firefox', 'iOS'];
gulp.task('styles', ['styles-dev'], function () {
  gulp.src(lessFiles)
    .pipe(concat('littleboxes.min.css'))
    .pipe(less({
      paths: [ path.join(__dirname, 'src', 'mixins') ]
    }))
    .pipe(autoprefixer({
       browsers: browsers,
       cascade: false
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist'));
});

gulp.task('styles-dev', function () {
  gulp.src(lessFiles)
    .pipe(concat('littleboxes.css'))
    .pipe(less({
      paths: [ path.join(__dirname, 'src', 'mixins') ]
    }))
    .pipe(autoprefixer({
       browsers: browsers,
       cascade: false
    }))
    .pipe(gulp.dest('dist'));
});
