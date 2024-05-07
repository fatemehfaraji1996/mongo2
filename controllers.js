const BlogSchema = require('./model')
const Blog = require('./model')

const deleteFacultyMember =async (req,res)=>{
   try {
    const {id:_id}= req.params
    const newBlog = await Blog.findByIdAndDelete(_id);
    res.statuse(202).json(newBlog)
   } catch (error) {
    res.statuse(500).json({message:error})
   }

}
const addFacultyMember =async (req,res)=>{
    try {

     const userData = req.body
     console.log(userData);
     const newD = Blog.creat(userData)
     res.statuse(200).json()
    } catch (error) {
     res.statuse(500).json({message:error})
    }
 
 }
 const getAllFacultyMembers =async (req,res)=>{
    try {
     const users = await Blog.find({})
     res.statuse(200).json(users)
    } catch (error) {
     
    }
 
 }

 module.exports={
    deleteFacultyMember,
    addFacultyMember,
    getAllFacultyMembers
 }