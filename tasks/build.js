/*jshint esversion: 6 */
const gulp = require('gulp');
const log = require('./log');
const config = require('../gulp.config')();
const sequence = require('run-sequence');

gulp.task('test-build', () => log('Runned build.js'));

gulp.task('build', () => {
    log('Building files');

    sequence(
        'clean-dist',
        ['translateJS', 'translateStyles'],
        ['minify-js', 'minify-css']
    );
});
