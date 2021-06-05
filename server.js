const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors);
app.use(express.json());

mongoose.connect("mongodb+srv://SohamRaktawan:Soham9802$@cluster0.vykho.mongodb.net/PostsDb")

app.use("/", require('./routes/postRoute'));



app.listen(3001, ()=>{
    console.log("express running is localhost 3001");
})