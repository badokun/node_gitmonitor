/**
 * Created by henno on 8/7/14.
 */

var db = require("secondthought");
var assert = require("assert");

module.exports = function(grunt){

    grunt.initConfig({
        jshint : {
            files : ['lib/**/*js', 'membership/models/**/*.js']
        },
        watch : {
            files : ['lib/**/*js', 'membership/models/**/*.js'],
            tasks : ['jshint']
        }

    });

    grunt.registerTask("installDb", function(){
        var done = this.async();

        db.connect({ db : "membership" }, function(err, db){
            db.dropDb("membership", function(){
               console.log();
            });

            db.install(['users', 'logs', 'sessions'], function(err,tableResult){
                console.log("connecting to db");
                assert.ok(err === null, err);
                console.log("DB Installed: " + tableResult);
                done();
            });
        });
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");


}