/**
 * Created by henno on 8/13/14.
 */
var Application = require('../models/application');
var User = require('../models/user');

var RegResult = function(){

    var result = {
        success : false
    };

    return result;
};

var validateInputs = function(app){

    if (app.email)
        app.validate();
};

exports.applyForMembership = function(args){
    var regResult = new RegResult();
    var app = new Application(args);

    validateInputs(app);

    if (app.isValid()){
        regResult.success = true;
        regResult.user = new User(args);
    }


    return regResult;
};

