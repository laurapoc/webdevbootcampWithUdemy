// jshint esversion:6
let mongoose = require("mongoose");

let commentSchema = mongoose.Schema({
    text: String,
    author: String
});


module.exports = mongoose.model("Comment", commentSchema);