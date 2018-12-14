var mongoose = require("mongoose");
var actorSchema = mongoose.Schema({
    id:Number,
    name: String,
    first: String,
    last:String,
    nombre:String,
    // _movies:[{type: mongoose.Schema.Types.ObjectId, ref:"MovieModel"}],
}, {collection: "actor"});
module.exports = actorSchema;