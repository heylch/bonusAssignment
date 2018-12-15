var mongoose = require("mongoose");
var movieSchema = mongoose.Schema({
    id:Number,
    title: String,
    // _actors: [{type: mongoose.Schema.Types.ObjectId, ref: "ActorModel"}],

}, {collection: "movie"});
module.exports = movieSchema;
