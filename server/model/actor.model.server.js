var mongoose = require("mongoose");
var movieModel = require("./movie.model.server");
var actorSchema = require("./actor.schema.server");
var actorModel = mongoose.model("ActorModel", actorSchema);

actorModel.createActor = createActor;
actorModel.findActorById = findActorById;
actorModel.updateActor = updateActor;
actorModel.findAllActors = findAllActors;
actorModel.deleteActorById = deleteActorById;
actorModel.deleteAllActors = deleteAllActors;
// userModel.addMovieToActor = addMovieToActor;
// userModel.removeMovie = removeMovie;
// userModel.findAllMoviesByActor = findAllMoviesByActor;
module.exports = actorModel;


function updateActor(actorId, actor) {
    return actorModel.updateOne({id: actorId},
        {$set: actor});
}


function createActor(actor) {
    return actorModel.create(actor);
}

function findActorById(actorId) {
    return actorModel.findById({id:actorId});
}

function findAllActors() {
    return actorModel.find();
}

function deleteActorById(actorId) {
    return actorModel.findOneAndRemove({id: actorId});
}
//
//
// function removeMovie(actorId, movieId) {
//     return actorModel
//         .findById(actorId)
//         .then(function (actor) {
//             var index = actor._movies.indexOf(movieId);
//             user._movies.splice(index, 1);
//             return actorModel.updateActor(actorId,actor);
//         })
// }
//
// function removeAllMovies(actorId) {
//     return actorModel
//         .findById(actorId)
//         .then(function (actor) {
//             actor._movies = [];
//             return actorModel.updateActor(actorId,actor);
//         })
// }
//
// function addMovieToActor(actorId, movieId) {
//     return actorModel
//         .findById(actorId)
//         .then(function (actor) {
//             if(actor._movies.indexOf(movieId) <0){
//                 actor._movies.push(movieId);
//             }
//             actorModel.updateActor(actorId,actor)
//                 .then(function (actor) {
//                     return movieModel.addActorToMovie(movieId,actorId);
//                 });
//         })
//
// }
//
// function findAllMoviesByActor(actorId) {
//     return actorModel.findById(actorId)
//         .populate('_movies')
//         .exec();
// }

function deleteAllActors() {
    return actorModel.remove({},function (res) {
    });
}