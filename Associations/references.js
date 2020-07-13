let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", { useNewUrlParser: true, useUnifiedTopology: true });

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
  posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
      }
  ]
});
const User = mongoose.model("User", userSchema);

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

// Post.create({
//     title: "how to cook the best burger pt.3",
//     content: "jkakfkjadkjkjsdhg"
// }, (err, post) => {
//     User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
//         if(err) {
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save((err, data) => {
//                 if(err) {
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });


// Find user
// Find all posts for that user

User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
    if(err) {
        console.log(err);
    } else {
        console.log(user);
    }
});


