/**
 * Created by henno on 8/11/14.
 *
 * Revealing Module Pattern
 */

var db = require("secondthought");

var RevealingUser = function(){


    var user = {};
    user.createdAt =  new Date();
    user.isValid = false;


    function getEmail() {
        return user.email;
    }

    function setEmail(email){
        user.email = email;
    }

    return  {
        setEmail : setEmail,
        getEmail : getEmail
    };
}();

module.exports = RevealingUser;