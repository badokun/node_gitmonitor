/**
 * Created by henno on 8/13/14.
 */
var Application = require('../models/application');
var RegResult = require('../models/regResult');
var User = require('../models/user');

var db = require("secondthought");


var Registration = function(){

    function checkIfUserExists(app){
      db.connect({db:"membership"}, function(){

          db.users.exists({email:app.email}, function(err, exists){
            if (exists){
             app.setInvalid();
            };
          });
      });
    };

    function validateInputs (app){
        if (app.email)
            app.validate();
    };

    function applyForMembership (args){
        var regResult = new RegResult();
        var app = new Application(args);
        validateInputs(app);
        checkIfUserExists(app);

        if (app.isValid()){
            regResult.success = true;
            regResult.user = new User(args);
        }

        return regResult;
    };

    return {
      applyForMembership : applyForMembership
    };

}();

module.exports = Registration;
