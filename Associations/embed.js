let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", { useNewUrlParser: true, useUnifiedTopology: true });

// POST - title, content
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});
const Post = mongoose.model("Post", postSchema);

// USER - email, name
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema],
});
const User = mongoose.model("User", userSchema);

// let newUser = new User({
//     email: "hermione@hogwarts.edu",
//     name: "Hermione Granger"
// });

// newUser.posts.push({
//     title: "How to bre polyjuice potion",
//     content: "Just kidding. Go to potions class to learn it!"
// });

// newUser.save((err, user) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// let newPost = new Post({
//     title: "reflections on Apples",
//     content: "They are delicious"
// });

// newPost.save((err, post) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({ name: "Hermione Granger" }, (err, user) => {
  if (err) {
    // console.log(err);
  } else {
    user.posts.push({
      title: "3 Thing I really hate",
      content: "Voldemort, Voldemort, Voldemort"
    });
    user.save((err, user) => {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});
