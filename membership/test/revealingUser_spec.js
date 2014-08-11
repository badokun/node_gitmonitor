/**
 * Created by henno on 8/11/14.
 */

var should = require("should");
var RevealingUser = require("../models/revealingUser");

describe("RevealingUser", function(){


    describe("defaults", function(){
        var user = {};

        before(function(){
            user = RevealingUser;
            user.setEmail("test@test.com");
        });

        it("email is test@test.com", function(){
            user.getEmail().should.equal("test@test.com");
        });



    });
});