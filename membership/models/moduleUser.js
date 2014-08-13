/*
 * Created by henno on 8/11/14.
 *
 *  Module Pattern
 */

var ModuleUser = function(){

    var user = {};
    user.createdAt =  new Date();

    return  {
        setEmail : function(email){
            user.email = email;
        },
        getEmail : function(){
            return user.email;
        }
    };
}();

module.exports = ModuleUser;