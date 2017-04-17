/*jshint esversion: 6 */
const gulp = require('gulp');
const log = require('./log');
const config = require('./../gulp.config')();
const gulpprint = require('gulp-print');
const gulpif = require('gulp-if');
const args = require('yargs').argv;
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');

gulp.task('test-processStyles', () => log('Runned processStyles.js'));

gulp.task('translateStyles', () => {
    log('Compilint SASS --> CSS');
    log('Src: ' + config.src.sass.all);
    log('Dest:' + config.temp.css.path);

    return gulp
        .src(config.src.sass.all)
        .pipe(gulpif(args.verbose, gulpprint((filePath) => {
            return `SASS translation: ${filePath}`;
        })))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.temp.css.path))
        .pipe(browserSync.stream());
});

gulp.task('minify-css', () => {
    log('Minify CSS');
    log('Src: ' + config.temp.css.all);
    log('Dest:' + config.dist.css.path);

    return gulp
        .src(config.temp.css.all)
        .pipe(gulpif(args.verbose, gulpprint((filePath) => {
            return `CSS minification: ${filePath}`;
        })))
        .pipe(cleanCSS())
        .pipe(gulp.dest(config.dist.css.path));
});
