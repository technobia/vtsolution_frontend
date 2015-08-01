/**
 * Created by apium on 01/08/2015.
 */


module.exports = function(grunt) {
    return {
        'angular-builder': {
            src:  'app/**/*.js',
            dest: 'build/project.js'        }
    };
};