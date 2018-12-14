const mongoose  = require('mongoose');
const actorMovieSchema  =  mongoose.Schema({
    _actor: {type: Number, ref:'ActorModel'},
    _movie: {type: Number, ref:'MovieModel'}
}, { collection:'actor_movie'});
module.exports = actorMovieSchema;