let express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// SCHEMA SETUP:
let campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

let Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//     name: "Granite Hill",
//     image: "https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906__340.jpg",
//     description: "this is a huge granite hill, no bathrooms, no water. Beautiful granite!"
//   },
//   (err, campground) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("newly created campground: ");
//       console.log(campground);
//     }
//   }
// );

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
  Campground.findById(req.params.id, function (err, foundCampground) {
    if (err) {
      console.log(err);
    } else {
      // render show template eith that campgroundS
      res.render("show", { campground: foundCampground });
    }
  });
});

app.listen(3000, () => {
  console.log("YelpCamp server is running");
});
