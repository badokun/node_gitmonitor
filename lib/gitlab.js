/**
 * Created by henno on 8/7/14.
 *
 * Should
 * git fetch
 * git log HEAD..origin/master
 * git pull origin master
 */


var log = require('./logging'),
    config = require('./config');

var configuration = config.get();

var somePrivateFunction = function (data, callback) {

    /*var buf = new Buffer(data.Body);
    var content = buf.toString();
    content = content.trim();
    var groups = content.split(',');

    log.info('groups received from s3: ' + groups);
    callback(groups);*/
 
};

exports.getMostRecentChanges = function (callback) {

    /*s3.getObject(configuration.bucket, configuration.key, function (err, data) {
        if (err) {
            log.error(err);
            throw err;
        }
        parseAutoScalers(data, callback);
    });*/
};