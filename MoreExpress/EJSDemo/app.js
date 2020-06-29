let express = require("express");
const { response } = require("express");
let app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req,res) {
    let thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    let posts =  [
        {title: "Post 1", author: "Susy"},
        {title: "Post 2", author: "Charly"},
        {title: "Post 3", author: "Colt"}
    ];
    res.render("posts", {posts: posts});
});

app.listen(3000, function() {
    console.log("Server is listening");
});