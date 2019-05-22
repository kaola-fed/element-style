const path = require('path');
const gulp = require('gulp');
const rename = require('gulp-rename');
const minifycss = require('gulp-clean-css');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const postcssConfig = require('./postcss.config');

gulp.task('dist-css', () => {
  gulp.src(path.join(__dirname, 'index.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(postcssConfig.plugins))
        .pipe(rename('index.css'))
        .pipe(minifycss())
        .pipe(gulp.dest(path.join(__dirname)));
});