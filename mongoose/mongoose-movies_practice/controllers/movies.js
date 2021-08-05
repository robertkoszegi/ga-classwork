const Movie = require("../models/movie");



function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    req.body.nowShowing = !!req.body.nowShowing;
    // remove whitespace next to commas
    req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
    // split if it's not an empty string
    if (req.body.cast) req.body.cast = req.body.cast.split(',');

    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }

    const movie = new Movie(req.body);
    movie.save(function(err) {
        // one way to handle errors
        if (err) {
            console.log(movie, "missing value");
            return res.render('movies/new');
        } 
        // for now, redirect right back to new.ejs
        res.redirect('/movies/new');
    });
}

function newMovie(req, res) {
    res.render('movies/new.ejs');
};

function index(req,res) {
    Movie.find((err, movies) => {
        if(err) return res.status(500).send(err);

        res.render("movies/index", {
            title: "Movie List",
            movies,
            
        })
    });

}

module.exports = {
    new: newMovie,
    create,
    index,
}


