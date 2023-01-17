const mongoose = require('mongoose');
const { Schema }= mongoose;

const movieSchema = new Schema ({
    title: String,
    genre: String,
    polt: String,
    cast: Array
})
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;