require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./conectdb')
const bodyParser =require('body-parser')
const Blog = require('./model')
// 
// app.use(express.urlencoded({ extended: true }))
// const router = require("express").Router()
// const router = require('./router')
app.use(bodyParser.text())
app.use(cors())
app.use(express.json())
const port =5000
db()

app.use('/members',require('./router'))


app.listen(port,()=>{
    console.log('your port is run');
})
