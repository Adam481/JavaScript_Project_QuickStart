/*jshint esversion: 6 */
module.exports = function () {
    const tests = './tests';
    const src = './src';
    const dist = './dist';
    const temp = './temp';
    const scripts = '/scripts';
    const sass = '/sass';
    const css = '/css';

    var config = {

        src: {
            path: src,
            js: {
                path: `${src}/${scripts}`,
                all: [
                    `${src}/${scripts}/**/*.js`,
                    `${src}/${scripts}/*.js`
                ]
            },
            sass: {
                path: `${src}/${sass}`,
                all: [
                    `${src}/${sass}/**/*.scss`,
                    `${src}/${sass}/*.scss`
                ]
            }
        },
        temp: {
            path: temp,
            js: {
                path: `${temp}/${scripts}`,
                all: [
                    `${temp}/${scripts}/**/*.js`,
                    `${temp}/${scripts}/*.js`
                ]
            },
            css: {
                path: `${temp}/${css}`,
                all: [
                    `${temp}/${css}/**/*.css`,
                    `${temp}/${css}/*.css`
                ]
            }
        },
        dist: {
            path: dist,
            js: {
                path: `${dist}/${scripts}`,
                all: [
                    `${dist}/${scripts}/**/*.js`,
                    `${dist}/${scripts}/*.js`
                ]
            },
            css: {
                path: `${dist}/${css}`,
                all: [
                    `${dist}/${css}/**/*.css`,
                    `${dist}/${css}/*.css`
                ]
            }
        },
        tests: {
            path: tests,
            helpers: `${tests}/**/*.js`,
            all: [
                `${tests}/**/*[Tt]est.js`,
            ]
        }


    };

    return config;
};
