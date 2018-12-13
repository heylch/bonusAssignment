const mongoose = require("mongoose");
const actorMovieSchema = require("./actor_movie.schema.server");
const actorMovieModel = mongoose.model("ActorMovieModel", actorMovieSchema);
actorMovieModel.createActorMovie = createActorMovie;
actorMovieModel.findAllActorsForMovie = findAllActorsForMovie;
actorMovieModel.findAllMoviesForActor = findAllMoviesForActor;
actorMovieModel.deleteAllActorsForMovie = deleteAllActorsForMovie;
actorMovieModel.deleteAllMoviesForActor = deleteAllMoviesForActor;
actorMovieModel.deleteActorMovie = deleteActorMovie;
actorMovieModel.deleteAllActorMovies = deleteAllActorMovies;
module.exports = actorMovieModel;

function createActorMovie(actorMovie) {
    return actorMovieModel.create(actorMovie);
}

function findAllActorsForMovie(movieId) {
    var actors = [];
    return actorMovieModel.find({_movie:movieId})
        .populate('_actor')
        .exec()
        .then(function (res) {
            for(i=0; i < res.length; i++)
                actors.push(res._actor);
            return actors;
        })
}

function findAllMoviesForActor(actorId) {
    var movies = [];
    return actorMovieModel.find({_actor:actorId})
        .populate('_movie')
        .exec()
        .then(function (res) {
            for(i=0; i < res.length; i++)
                movies.push(res._movie);
            return movies;
        })
}

function deleteAllActorsForMovie(movieId) {
    return actorMovieModel.delete({_movie:movieId});
}

function deleteAllMoviesForActor(actorId) {
    return actorMovieModel.delete({_actor:actorId});
}

function deleteActorMovie(actorId,movieId) {
    return actorMovieModel.deleteOne({_actor:actorId,_movie:movieId});
}

function deleteAllActorMovies() {
    return actorMovieModel.remove({},function () {

    });
}