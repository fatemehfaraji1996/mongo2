const express = require('express')
const cors = require('cors')
const bodyParser =require('body-parser')
require('dotenv').config()
const app = express()
const {db} = require('./conectdb')
const {Blog} = require('./model')
app.use(express.json())
app.use(bodyParser.text())
// 
app.use(express.urlencoded({ extended: true }))
// const router = require("express").Router()
const router = require('./router')
app.use(bodyParser.text())
app.use(cors())
const port =5000
db()

// app.use('/member',require('./router'))


 app.post('/user', async(req,res)=>{
    try {
        const userData = req.body
        const newD = await  Blog.create(userData)
        res.status(200).json({ok: true,newD})
       } catch (error) {
        console.log(error);
        res.status(500).json({message:error})
       }
})
app.get('/user',async (req,res)=>{
    try {
     const users = await Blog.find()
     res.status(200).json(users)
    } catch (error) {
    }
 })
app.delete('/user/:id',async (req,res)=>{
    try {
     const {id:_id}= req.params
     const newBlog = await Blog.findByIdAndDelete(_id);
     res.status(202).json(newBlog)
    } catch (error) {
     res.status(500).json({message:error})
    }
 
 })



app.listen(5000,()=>{
    console.log('your port is run');
})
