import gulp from 'gulp';
import sass from 'gulp-sass';
import cssmin from 'gulp-cssmin';
import autoprefixer from 'gulp-autoprefixer';
import include from 'gulp-include';

import PATH from './path';

const sassServe = () => {
  return gulp.src(PATH.src.sass)
    .pipe(include({
      includePaths: [
        __dirname + "/node_modules",
        __dirname + "/css"
      ]
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 10 version', '> 5%', 'safari 5', 'ios 6', 'android 4']}))
    .pipe(gulp.dest(PATH.dest.sass));
};

const sassBuild = () => {
  return gulp.src(PATH.src.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(autoprefixer({browsers: ['last 10 version', '> 5%', 'safari 5', 'ios 6', 'android 4']}))
    .pipe(gulp.dest(PATH.dest.sass));
};

const sassWatch = () => {
  gulp.watch(PATH.watch.sass, ['sass']);
};

export { sassServe, sassBuild, sassWatch };