import gulp from 'gulp';
import pug from 'gulp-pug';
import htmlBeautify from 'gulp-html-beautify';
import htmlMin from 'gulp-htmlmin';
import PATH from './path';

const pugServe = () => {
  return gulp.src(PATH.src.pug)
    .pipe(pug())
    .pipe(htmlBeautify({ collapseWhitespace: true }))
    .pipe(gulp.dest(PATH.dest.pug))
};

const pugBuild = () => {
  return gulp.src(PATH.src.pug)
    .pipe(pug())
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(gulp.dest(PATH.dest.pug))
};

const pugWatch = () => {
  gulp.watch(PATH.watch.pug, ['pug']);
};

export { pugServe, pugBuild, pugWatch };