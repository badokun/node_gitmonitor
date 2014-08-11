/**
 * Created by henno on 14/08/10.
 */

var should = require("should");
var User = require("../models/user");

describe("User", function(){


    describe("defaults", function(){
        var user = {};
        
        before(function(){
            user = new User({email:"test@test.com"});
        });

        it("email is test@test.com", function(){
            user.email.should.equal("test@test.com");
        });

        it("has login");
    });
});