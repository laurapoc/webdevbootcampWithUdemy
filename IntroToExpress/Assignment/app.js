let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function (req, res) {
    let sounds = {
        pig: "oink",
        cow: "Moo",
        dog: "Woof! Woof!",
        cat: "i hate you human",
        goldfish: "..."
    }
  let animal = req.params.animal.toLowerCase();
  let sound = sounds[animal];
  res.send("The " + animal + " says: '" + sound + "'");
});

app.get("/repeat/:subWord/:number", function (req, res) {
  let subWord = req.params.subWord + " ";
  let number = req.params.number;
  let response = subWord.repeat(number);
  res.send(response);
});

app.get("*", function (req, res) {
  res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(3000, function () {
  console.log("Serving Express app demo on port 3000");
});
