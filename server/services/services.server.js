var app = require("../../express");
var actorModel = require("../model/actor.model.server");
var movieModel = require("../model/movie.model.server");
var actorMovieModel = require("../model/actor_movie.model.server")


app.post("/api/actor", createActor);
app.post("/api/movie", createMovie);
app.get("/api/actor", findAllActors);
app.get("/api/movie", findAllMovies);
app.get("/api/actor/:actorId", findActorById);
app.get("/api/movie/:movieId", findMovieById);
app.get("/api/movie/:movieId/actor", findAllActorsForMovie);
app.get("/api/actor/:actorId/movie", findAllMoviesForActor);
app.put("/api/actor/:actorId", updateActor);
app.put("/api/movie/:movieId", updateMovie);
app.post("/api/actor/:actorId/movie/:movieId", addActorMovie);
app.post("/api/movie/:movieId/actor/:actorId", addActorMovie);
app.delete("/api/actor/:actorId", deleteActor);
app.delete("/api/movie/:movieId", deleteMovie);
app.delete("/api/actor", deleteAllActors);
app.delete("/api/movie", deleteAllMovies);
app.delete("/api/actor/:actorId/movie/:movieId", deleteActorMovie);
app.delete("/api/actor/:actorId/movie", deleteAllMoviesForActor);

function createActor(req,res) {
    var actor = req.body;
    actorModel
        .createActor(actor)
        .then(function (actor) {
            res.json(actor);
        });
}

function createMovie(req,res) {
    var movie = req.body;
    movieModel
        .createMovie(movie)
        .then(function (movie) {
            res.json(movie);
        });
}

function findAllActors(req,res) {
    actorModel
        .findAllActors()
        .then(function (actors) {
            res.json(actors);
        });
}

function findAllMovies(req,res) {
    movieModel
        .findAllMovies()
        .then(function (movies) {
            res.json(movies);
        });
}

function findActorById(req,res) {
    var actorId = req.params.actorId;
    actorModel
        .findActorById(actorId)
        .then(function (actor) {
            res.json(actor);
        }, function (err) {
            res.sendStatus(404).send(err);
        });
}

function findMovieById(req,res) {
    var movieId = req.params.movieId;
    movieModel
        .findMovieById(movieId)
        .then(function (movie) {
            res.json(movie);
        }, function (err) {
            res.sendStatus(404).send(err);
        });
}

function findAllMoviesForActor(req,res) {
    var actorId = req.params.actorId;
    var movies  = [];
    actorMovieModel.findAllMoviesForActor(actorId)
        .then(function (result) {
            // console.log(result);
            // for(i=0; i < result.length; i++){
            //     movieModel.findMovieById(result[i]._movie)
            //         .then(function (res1) {
            //             console.log(res1);
            //             movies.push(res1);
            //         })
            // }
            res.json(result);
        })
}

function findAllActorsForMovie(req,res) {
    var movieId = req.params.movieId;
    actorMovieModel.findAllActorsForMovie(movieId)
        .then(function (actors) {
            res.json(actors);
        })
}


function updateActor(req,res) {
    var actorId = req.params.actorId;
    var actor = req.body;
    actorModel
        .updateActor(actorId,actor)
        .then(function (actor) {
            res.json(actor);
        });
}

function updateMovie(req,res) {
    var movieId = req.params.movieId;
    var movie = req.body;
    movieModel
        .updateMovie(movieId,movie)
        .then(function (movie) {
            res.json(movie);
        });
}

function deleteActor(req,res) {
    var actorId = req.params.actorId;
    actorModel
        .deleteActorById(actorId)
        .then(function (actor) {
            res.json(actor)
        }, function (err) {
            res.sendStatus(500).send(err);
        })
}

function deleteMovie(req,res) {
    var movieId = req.params.movieId;
    console.log(movieId);
    movieModel
        .deleteMovieById(movieId)
        .then(function (movie) {
            res.json(movie)
        }, function (err) {
            res.sendStatus(500).send(err);
        })
}


function addActorMovie(req,res) {
    var actorId = req.params.actorId;
    var movieId = req.params.movieId;
    var actorMovie = {"_actor":actorId,"_movie":movieId};
    actorMovieModel.createActorMovie(actorMovie)
        .then(function (data) {
            res.json(actorMovie);
        })
}

function deleteActorMovie(req,res) {
    var actorId = req.params.actorId;
    var movieId = req.params.movieId;
    actorMovieModel.deleteActorMovie(actorId,movieId)
        .then(function (result) {
            res.json(result);
        })
}

function deleteAllMoviesForActor(req,res) {
    var actorId = req.params.actorId;
    actorMovieModel.deleteAllMoviesForActor(actorId)
        .then(function (result) {
            res.json(result);
        })
}

function deleteAllMovies(req,res) {
    movieModel.deleteAllMovies()
        .then(function (result) {
            res.json(result);
        })
}

function deleteAllActors(req,res) {
    actorModel.deleteAllActors()
        .then(function (result) {
            // console.log(result);
            res.json(result);
        })

}



