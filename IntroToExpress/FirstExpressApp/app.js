let express = require("express");

let app = express();

app.get("/", function(req, res) {
    res.send("Hi there");
});

app.get("/bye", function(req, res) {
    res.send("Goodbye!!");
});
app.get("/dog", function(req, res) {
    console.log("someone made a request to /dog");
    res.send("Meow!!");
});

app.get("/r/:subredditName", function(req, res) {
    let subreddit = req.params.subredditName;
    res.send("Welcome to the " +  subreddit.toUpperCase() + " SUBREDDIT");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
    console.log(req.params);
    res.send("welcome to comments");
});

app.get("*", function(req, res) {
    res.send("You are a star");
});

app.listen(3000, function() {
    console.log("Serving dog demo on port 3000")
});

// app.listen(process.env.PORT, process.env.IP);