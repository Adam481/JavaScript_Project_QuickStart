/*jshint esversion: 6 */
﻿const gulp = require('gulp');
const log = require('./log');
const config = require('./../gulp.config')();
const util = require('gulp-util');
﻿const del = require('del');

gulp.task('test-clean', () => log('Runned clean.js'));

gulp.task('clean-src', () => {
    log('All scr clean runned');
    clean(`${config.src.path}/*`);
});

gulp.task('clean-temp', () => {
    log('All tmp clear runned');
    clean(`${config.temp.path}/*`);
});

gulp.task('clean-dist', () => {
    log('All dist clear runned');
    clean(`${config.dist.path}/*`);
});

gulp.task('clean-src-scripts', () => {
    clean(config.src.js.all);
});

gulp.task('clean-tmp-scripts', () => {
    clean(config.temp.js.all);
});

gulp.task('clean-dist-scripts', () => {
    clean(config.dist.js.all);
});

gulp.task('clean-src-styles', () => {
    clean(config.src.css.all);
});

gulp.task('clean-tmp-styles', () => {
    clean(config.temp.css.all);
});

gulp.task('clean-dist-styles', () => {
    clean(config.dist.css.all);
});


function clean(inPath) {
    log('Cleaning: ' + util.colors.blue(inPath));
    del(inPath);
}
