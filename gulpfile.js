/*jshint esversion: 6 */
const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');
const log = require('./tasks/log');


gulp.task('default', [
        'test-build',
        'test-clean',
        'test-jasmine-tests',
        'test-processScript',
        'test-processStyles',
        'test-serve'
    ],
    () => log('Runned gulpfile.js')
);
