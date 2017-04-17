/*jshint esversion: 6 */
const gulp = require('gulp');
const log = require('./log');
const config = require('../gulp.config')();
const browserSync = require('browser-sync');

gulp.task('test-serve', () => log('Runned serve.js'));

gulp.task('serve', () => {
    log('Runned serve');

    browserSync({
        server: config.src.path
    });

    var paths = [
        config.src.path + '/*',
        config.src.js.all,
        config.src.sass.all
    ];

    gulp.watch(paths, ['reload']);
});

gulp.task('reload', () => {
    log('Reloading browser window');
    browserSync.reload();
});
