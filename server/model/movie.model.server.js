var mongoose = require("mongoose");
var movieSchema = require("./movie.schema.server");
var movieModel = mongoose.model("MovieModel", movieSchema);


movieModel.findMovieById = findMovieById;
movieModel.updateMovie = updateMovie;
movieModel.findAllMovies = findAllMovies;
movieModel.deleteMovieById = deleteMovieById;
movieModel.deleteAllMovies = deleteAllMovies;
movieModel.createMovie = createMovie;
// movieModel.addActorToMovie = addActorToMovie;
module.exports = movieModel;

function createMovie(movie) {
    return movieModel.create(movie);
}

function deleteMovieById(movieId) {
    return movieModel.findOneAndRemove({id:movieId});
}

function findMovieById(movieId) {
    return movieModel.findOne({id: movieId});


}

function updateMovie(movieId, movie) {
    return movieModel
        .updateOne({id: movieId},
            {$set: movie});
}

function findAllMovies() {
    return movieModel.find();
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


function deleteAllMovies() {
    return movieModel.remove({},function () {
        
    })
}
