let express = require("express");
let app = express();
let bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

let campgrounds = [
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906__340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201__340.jpg"},
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906__340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201__340.jpg"},
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906__340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201__340.jpg"}
]

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
   res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", (req, res) => {    
  let name = req.body.name;
  let image = req.body.image;
  let newCampground = {name: name, image: image}
  campgrounds.push(newCampground);

  res.redirect("/campgrounds");
});


app.get("/campgrounds/new", (req, res) => {
    res.render("new.ejs");
});


 
app.listen(3000, () => {
    console.log("YelpCamp server is running");
});