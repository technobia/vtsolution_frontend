/**
 * Created by kevin on 2/9/15.
 */
module.exports = function(grunt) {
    var compileTasks = [
        'less:compile'
    ];
    grunt.registerTask('build', compileTasks);
};
