let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app", { useNewUrlParser: true,  useUnifiedTopology: true });
// console.log(mongoose);
let catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

let Cat = mongoose.model("Cat", catSchema);

// adding a new cat in a DB

//  let george = new Cat({
//      name: "Mrs. Norris",
//      age: 7,
//      temperament: "Evil"
//  });

//  george.save(function(err, cat){
//     if(err) {
//         console.log("Something is wrong!")
//     } else {
//         console.log("We just saved a cat to the DB");
//         console.log(cat);
//     }
//  });

// other method to create a new cat:

// Cat.create({
//     name: "Snow White",
//     age: 15,
//     temperament: "Bland"
// }, function(err, cat) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("new cat: ", cat);
//     }
// });


// retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats) {
    if(err) {
        console.log(("Oh no, error!"));
        console.log(err);
    } else {
        console.log("all the cats:");
        console.log(cats);
    }
});