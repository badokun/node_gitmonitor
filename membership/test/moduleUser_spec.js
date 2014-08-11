/**
 * Created by henno on 8/11/14.
 */

var should = require("should");
var ModuleUser = require("../models/moduleUser");

describe("RevealingUser", function(){


    describe("defaults", function(){
        var user = {};

        before(function(){
            user = ModuleUser;
            user.setEmail("test@test.com");
        });

        it("email is test@test.com", function(){
            user.getEmail().should.equal("test@test.com");
        });

    });
});