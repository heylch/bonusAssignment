var mongoose = require("mongoose");
var movieSchema = mongoose.Schema({
    title: String,
    _actors: [{type: mongoose.Schema.Types.ObjectId, ref: "ActorModel"}],

}, {collection: "movie"});
module.exports = movieSchema;
