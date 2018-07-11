var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    author:{
        type: String,
        require: true
    },
    body:{
        type: String,
        require: true
    },
    comments:[{ body: String, date:Date}],
    date: {type:Date, default:Date.now},
    hidden: {type:Boolean, default:false},
    meta:{
        votes: Number,
        favs: Number
    }
});