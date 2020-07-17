let express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  Campground = require("./models/campground"),
  Comment = require("./models/comment"),
  // User = require("./models/user"),
  seedDB = require("./seeds");


seedDB();
mongoose.connect("mongodb://localhost:27017/yelp_camp_v3", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("landing");
});

// INDEX route - show all campgrounds
app.get("/campgrounds", (req, res) => {
  // Get all campgrounds from DB
  Campground.find({}, (err, allCampgrounds) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { campgrounds: allCampgrounds });
    }
  });
});

// CREATE route - add new campground to DB
app.post("/campgrounds", (req, res) => {
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
app.get("/campgrounds/new", (req, res) => {
  res.render("new.ejs");
});

// SHOW route - ehow more info about one campground
app.get("/campgrounds/:id", function (req, res) {
  //   Find the campground with provided id
  Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
    if (err) {
      console.log(err);
    } else {
      console.log(foundCampground);
      // render show template eith that campgroundS
      res.render("show", { campground: foundCampground });
    }
  });
});

app.listen(3000, () => {
  console.log("YelpCamp server is running");
});
