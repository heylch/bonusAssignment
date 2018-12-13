var mongoose = require("mongoose");
var movieSchema = require("./movie.schema.server");
var movieModel = mongoose.model("MovieModel", movieSchema);


movieModel.findMovieById = findMovieById;
movieModel.updateMovie = updateMovie;
movieModel.findAllMovies = findAllMovies;
movieModel.deleteMovie = deleteMovie;
movieModel.createMovie = createMovie;
// movieModel.addActorToMovie = addActorToMovie;
module.exports = movieModel;

function createMovie(movie) {
    return movieModel.create(movie);
}

function deleteMovie(movieId) {
    return movieModel.findOneAndRemove(movieId);
}

function findMovieById(movieId) {
    return movieModel
        .findOne({_id: movieId})
        .populate('_actors')
        .exec();

}

function updateMovie(movieId, movie) {
    return movieModel
        .updateOne({_id: movieId},
            {$set: movie});
}

function findAllMovies() {
    return movieModel
        .find()
        .populate('_actors')
        .exec();
}

// function addActorToMovie(movieId,actorId) {
//     return movieModel
//         .findOne({_id:movieId})
//         .then(function (movie) {
//             if(movie._actors.indexOf(actorId) <0) {
//                 movie._actors.push(actorId);
//             }
//             return movieModel.updateMovie(movieId,movie);
//         })
// }
