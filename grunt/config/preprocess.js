/**
 * Created by jose on 01/07/2015.
 */
module.exports = function(grunt) {
    return {
        dev: {
            inline: true,
            src: './templates/index.html',
            dest: './index.html'
        }
    };
};
