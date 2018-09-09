'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

gulp.task('compile', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./src/css'));
});

// gulp.task('copyfont', function() {
//   return gulp.src('./src/css/**')
//     .pipe(cssmin())
//     .pipe(gulp.dest('./lib/fonts'));
// });

gulp.task('build', ['compile']);


// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var autoprefixer = require('gulp-autoprefixer');
// var cssmin = require('gulp-cssmin');

// gulp.task('scss',function(){
//     gulp.src('./src/scss/*.scss')  //这里是scss文件的目录
//         .pipe(sass.sync())
//         .pipe(autoprefixer({
//           browsers: ['ie > 9', 'last 2 versions'],
//           cascade: false
//         }))
//         .pipe(sass().on('error',sass.logError))
//         .pipe(cssmin())
//         .pipe(gulp.dest('./src/css'));  //这里是编译后css存放的目录
// })

// gulp.task('default',function(){
//     gulp.watch('./src/scss/*.scss',['scss']);  //在这里执行文件观察任务，发现变化执行上面定义好的 `scss`编译任务。
// })