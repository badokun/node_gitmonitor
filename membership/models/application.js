/**
 * Created by henno on 8/13/14.
 */
var Application = function(args) {

    var app = {};
    app.email = args.email;
    app.status = "pending";

    app.isValid = function(){
      return app.status === "validated";
    };

    app.setInvalid = function(){
      app.status = "invalid";
    };

    app.validate = function(){
        app.status = "validated";
    }

    return app;

};

module.exports = Application;