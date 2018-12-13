const mongoose  = require('mongoose');
const actorMovieSchema  =  mongoose.Schema({
    _actor: {type: mongoose.Schema.Types.ObjectId, ref:'ActorModel'},
    _movie: {type: mongoose.Schema.Types.ObjectId, ref:'MovieModel'}
}, { collection:'actor_movie'});
module.exports = actorMovieSchema;