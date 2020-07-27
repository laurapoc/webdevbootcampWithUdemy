// jshint esversion:6

let mongoose = require("mongoose");
// SCHEMA SETUP:
let campgroundSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String,
  description: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    username: String,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

// This is the second recomended solution to delete comments at the same time when deleting campground:
// const Comment = require("./comment");
// campgroundSchema.pre("remove", async function () {
//   await Comment.remove({
//     _id: {
//       $in: this.comments,
//     },
//   });
// });

module.exports = mongoose.model("Campground", campgroundSchema);
