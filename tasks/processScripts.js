/*jshint esversion: 6 */
const gulp = require('gulp');
const log = require('./log');
const config = require('./../gulp.config')();
const gulpprint = require('gulp-print');
const gulpif = require('gulp-if');
const args = require('yargs').argv;
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('test-processScript', () => log('Runned processScript.js'));

gulp.task('translateJS', () => {
    log('Compilint ES6 --> ES5');
    log('Src: ' + config.src.js.all);
    log('Dest:' + config.temp.js.path);

    return gulp
        .src(config.src.js.all)
        .pipe(gulpif(args.verbose, gulpprint((filePath) => {
            return `ES6 translation: ${filePath}`;
        })))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(config.temp.js.path));
});

gulp.task('minify-js', () => {
    log('Minify JS');
    log('Src: ' + config.temp.js.all);
    log('Dest:' + config.dist.js.path);

    return gulp
        .src(config.temp.js.all)
        .pipe(gulpif(args.verbose, gulpprint((filePath) => {
            return `JS minification: ${filePath}`;
        })))
        .pipe(uglify())
        .pipe(gulp.dest(config.dist.js.path));
});
