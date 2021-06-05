const mongoose = require("mongoose");

const PostSchema = {
    title: String,
    desc: String
}

const Post = mongoose.model("post", PostSchema);

module.exports = Post;