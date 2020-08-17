const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Studio: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Games', GameSchema);