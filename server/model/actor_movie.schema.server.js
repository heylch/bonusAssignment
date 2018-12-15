const mongoose  = require('mongoose');
const actorMovieSchema  =  mongoose.Schema({
    actor: {type: Number, ref:'ActorModel'},
    movie: {type: Number, ref:'MovieModel'},
    _actor: {type: mongoose.Schema.Types.ObjectId, ref:'ActorModel'},
    _movie: {type: mongoose.Schema.Types.ObjectId, ref:'MovieModel'}
}, { collection:'actor_movie'});
module.exports = actorMovieSchema;