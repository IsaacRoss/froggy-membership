/**
 * Created by iross on 1/28/15.
 */
module.exports = function(grunt){
    grunt.initConfig({
       jshint: {
           files: ['lib/**/*.js', 'models/**/*.js']
       },
        watch: {
            files: ['lib/**/*.js', 'models/**/*.js'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
}