const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    imdb_id: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    overview: {
        type: String,
        required: true,
    },
    poster_path: {
        type: String,
        required: true,
    },
    release_date: {
        type: Date,
        required: true,
    },
    original_language: {
        type: String,
    },
    budget: {
        type: Number,
    },
    revenue: {
        type: Number,
    },
    rating_1: {
        type: Number,
    },
    rating_2: {
        type: Number,
    },
});

module.exports = Movie = mongoose.model('movie', MovieSchema);

/*

genres: [
        {
            id: String,
            name: String,
        },
    ],

*/
