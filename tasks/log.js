/*jshint esversion: 6 */
﻿const util = require('gulp-util');

module.exports = log;

function log(msg) {

    if (typeof (msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                util.log(util.colors.blue(msg[item]));
            }
        }
    } else {
        util.log(util.colors.blue(msg));
    }

}
