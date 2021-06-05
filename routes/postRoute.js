const express = require("express");
const router = express.Router();
const Post = require("../models/PostsModel")

router.route('/create').post((req,res)=>{
    const title = req.body.title;
    const desc = req.body.desc;
    const newPost = new Post({
        title,
        desc
    });

    newPost.save();
})

module.exports = router;