/**
 * Created by henno on 8/7/14.
 */

module.exports = function(grunt){

    grunt.initConfig({
        jshint : {
            files : ['lib/**/*js', 'models/**/*.js']
        },
        watch : {
            files : ['lib/**/*js', 'models/**/*.js'],
            tasks : ['jshint']
        }

    });


    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
}