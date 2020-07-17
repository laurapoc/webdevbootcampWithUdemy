// jshint esversion:6

let mongoose = require("mongoose");
let Campground = require("./models/campground");
let Comment = require("./models/comment");

let data = [
  {
    name: "Cloud's Rest",
    image:
      "https://images.unsplash.com/photo-1520824071669-892f70d8a23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1297&q=80",
    description: "Hello! Nice picture. :)",
  },
  {
    name: "My new campground",
    image:
      "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "Hello! Nice picture. :)",
  },
  {
    name: "Some other time",
    image:
      "https://images.unsplash.com/photo-1487750404521-0bc4682c48c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "Hello! Nice picture. :)",
  },
];

function seedDB() {
  // Remove all campgrounds
  Campground.remove({}, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("removed campgrounds");
    // add a few campgrounds
    data.forEach(function (seed) {
      Campground.create(seed, (err, campground) => {
        if (err) {
          console.log(err);
        } else {
          console.log("added campground");
          //   create a comment
          Comment.create(
            { text: "This place is great, but you wished there was internet", author: "Homer" },
            (err, comment) => {
              if (err) {
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("Created new comment.");
              }
            }
          );
        }
      });
    });
  });

  // add a few comments
}

module.exports = seedDB;
