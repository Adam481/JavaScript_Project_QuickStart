/*jshint esversion: 6 */
const gulp = require('gulp');
const log = require('./log');
const config = require('../gulp.config')();
const gulpprint = require('gulp-print');
const gulpif = require('gulp-if');
const args = require('yargs').argv;
const jasmine = require('gulp-jasmine');
const JasmineConsoleReporter = require('jasmine-console-reporter');

gulp.task('test-jasmine-tests', () => log('Runned jasmine-tests.js'));

const reporter = new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: false
});

gulp.task('tests', () => {
    log(`Running jasmine tests: ${config.tests.all}`);

    return gulp
        .src(`${config.tests.all}`)
        .pipe(gulpif(args.verbose, gulpprint((filePath) => {
            return `Test file: ${filePath}`;
        })))
        .pipe(jasmine({
            reporter: reporter
        }));
});
