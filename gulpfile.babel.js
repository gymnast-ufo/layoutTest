import gulp from 'gulp';
import { sassServe, sassBuild, sassWatch } from './gulp/sass';
import { pugServe, pugBuild, pugWatch } from './gulp/pug';

// Sass //
gulp.task('sass', sassServe);
gulp.task('sass:prod', sassBuild);
gulp.task('sass:watch', sassWatch);

// Pug //
gulp.task('pug', pugServe);
gulp.task('pug:prod', pugBuild);
gulp.task('pug:watch', pugWatch);

// Default task
gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

// Build production-ready code
gulp.task('build', [
  'pug:prod',
  'sass:prod',
]);

// Server tasks with watch
gulp.task('serve', [
  'pug',
  'sass',
  'pug:watch',
  'sass:watch',
]);
