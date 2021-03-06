var q = require('q');

var connectionString = 'mongodb://127.0.0.1:27017/bonus'; // for local
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
    var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds047448.mlab.com:47448/heroku_12h9x63q'; // user yours
}
// Replace "@ds157268.mlab.com:57268/heroku_nh37fqq4"
// above with your own URL given to you by mLab

var mongoose = require("mongoose");
// var instance2 = new Mongoose();
var db = mongoose.connect(connectionString);
mongoose.Promise = q.Promise;
module.exports = db;