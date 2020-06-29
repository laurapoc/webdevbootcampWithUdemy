let express = require("express");
let app = express();


app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
   let campgrounds = [
       {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg"},
       {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906__340.jpg"},
       {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201__340.jpg"}
   ]
   res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, () => {
    console.log("YelpCamp server is running");
});