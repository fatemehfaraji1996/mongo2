const exports = require('express')
const connectDB = require('./conectdb')
const port =3000


connectDB()
app.listen(port,()=>{
    console.log('your port is run');
})
