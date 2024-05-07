const express = require('express')
const app = express()
const db = require('./conectdb')
const Blog = require('./model')
// 
const cors = require('cors')
const bodyParser =require('body-parser')
const router = require("express").Router()
require('dotenv').config()
app.use(bodyParser.text())
app.use(cors())
app.use(express.json())
const port =5000
db()
app.listen(port,()=>{
    console.log('your port is run');
})
