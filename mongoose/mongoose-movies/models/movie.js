
const mongoose = require('mongoose');

// creating schema option 1
// const Schema = mongoose.Schema;
// const movieSchema = newSchema({[...]});

// creating schema option 2
const movieSchema = new mongoose.Schema({
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean,
});

// associate the schema with a model (to be able to do CRUD operations)
module.exports = mongoose.model('Movie', movieSchema)
