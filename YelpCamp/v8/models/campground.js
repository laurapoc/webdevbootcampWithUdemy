// jshint esversion:6


let mongoose = require("mongoose");
// SCHEMA SETUP:
let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
  });
  
  module.exports = mongoose.model("Campground", campgroundSchema);