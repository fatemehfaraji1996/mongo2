const mongoose= require("mongoose");
const BlogSchema = new mongoose.Schema({
    name: String ,
    age:  Number ,
    gender:String,
    exp: Number ,
    type: String ,
    qualification:String,
})
const Blog=  mongoose.model("Blog",BlogSchema)
module.exports = { Blog };