/**
 * Created by henno on 8/6/14.
 */

var gitlab = require("./lib/gitlab.js");
var config = require("./lib/config.js");


function something() {
    console.log('what happens here');
}
gitlab.getMostRecentChanges(something);