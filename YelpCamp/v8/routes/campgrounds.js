// jshint esversion: 6

const express = require("express");
const router = express.Router();
const Campground = require("../models/campground");

// INDEX route - show all campgrounds
router.get("/", (req, res) => {
    // Get all campgrounds from DB
    Campground.find({}, (err, allCampgrounds) => {
      // console.log(req.user);
  
      if (err) {
        console.log(err);
      } else {
        res.render("campgrounds/index", { campgrounds: allCampgrounds, currentUser: req.user });
      }
    });
  });
  
  // CREATE route - add new campground to DB
  router.post("/", (req, res) => {
    let name = req.body.name;
    let image = req.body.image;
    let description = req.body.description;
    let newCampground = { name: name, image: image, description: description };
    //   Create a new campground and save to DB
    Campground.create(newCampground, (err, newlyCreated) => {
      if (err) {
        console.log(err);
      } else {
        // redirect back to campgrounds page
        res.redirect("/campgrounds");
      }
    });
  });
  
  // NEW route - show form to create new campground
  router.get("/new", (req, res) => {
    res.render("campgrounds/new");
  });
  
  // SHOW route - ehow more info about one campground
  router.get("/:id", function (req, res) {
    //   Find the campground with provided id
    Campground.findById(req.params.id)
      .populate("comments")
      .exec(function (err, foundCampground) {
        if (err) {
          console.log(err);
        } else {
          console.log(foundCampground);
          // render show template eith that campgroundS
          res.render("campgrounds/show", { campground: foundCampground });
        }
      });
  });
  
  
  module.exports = router;