const mongoose = require("mongoose");
const actorMovieSchema = require("./actor_movie.schema.server");
const actorMovieModel = mongoose.model("ActorMovieModel", actorMovieSchema);
const movieModel = require('./movie.model.server');
const actorModel = require('./actor.model.server');
actorMovieModel.createActorMovie = createActorMovie;
actorMovieModel.findAllActorsForMovie = findAllActorsForMovie;
actorMovieModel.findAllMoviesForActor = findAllMoviesForActor;
actorMovieModel.deleteAllActorsForMovie = deleteAllActorsForMovie;
actorMovieModel.deleteAllMoviesForActor = deleteAllMoviesForActor;
actorMovieModel.deleteActorMovie = deleteActorMovie;
actorMovieModel.deleteAllActorMovies = deleteAllActorMovies;
actorMovieModel.findAllActorMovies = findAllActorMovies;
module.exports = actorMovieModel;

function createActorMovie(actorMovie) {
    return actorMovieModel.create(actorMovie);
}

function findAllActorsForMovie(movieId) {
    return actorMovieModel.find({_movie:movieId})
        .then(function (res) {
            var actors = [];
            for(i=0; i < res.length; i++){
                actors.push(res[i]._actor);
            }
            return actors;
        });
}

function findAllMoviesForActor(actorId) {
    return actorMovieModel.find({_actor:actorId})
        .then(function (res) {
            var movies = [];
            console.log(res);
            for(i=0; i < res.length; i++){
                movies.push(res[i]._movie);
            }
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

function findAllActorMovies() {
    return actorMovieModel.find()
        .populate('_actor')
        .p
}