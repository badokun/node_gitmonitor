/**
 * Created by henno on 8/13/14.
 */

var Registration = require('../lib/registration');
var should = require("should");

describe("Registration", function(){

    describe("a valid application", function(){
        var regResult = {};

        before(function(){
           regResult = Registration.applyForMembership({email: "peter@pan.com"})
           //regResult = Registration.applyForMembership({email:""})

        });


        it("is successful", function(){
            regResult.success.should.equal(true);
        });

        it("creates a user");
    });

    describe("an empty or null email", function(){
        it("is not successful");

    });
});