const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
    setUp:{
        type: String
    },
    punchLine:{
        type: String
    }
},   {timestamps: true});

const joke = mongoose.model('joke',jokeSchema);
module.exports = joke;