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
        });

        it("is successful", function(){
            regResult.success.should.equal(true);
        });

        it("creates a user", function(){
            should(regResult.user).be.ok;


        });
    });

    describe("an empty or null email", function(){

        var regResult = {};

        before(function(){
            regResult = Registration.applyForMembership({email: ""})
        });

        it("is not successful", function(){
            regResult.success.should.equal(false);
        });

        it("does not create a user", function(){
           should(regResult.user).be.not.ok;
        });

    });
});