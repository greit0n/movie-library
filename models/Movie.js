const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    img: {
        type: String,
    },
});

module.exports = Movie = mongoose.model('movie', MovieSchema);
