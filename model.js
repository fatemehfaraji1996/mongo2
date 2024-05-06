const { Schema, model } = require("mongoose");
const BlogSchema = new Schema({
    name:'String',
    age: 'Number',
    exp:'Number',
    type:'String',
    qualification:'String'
})
const model = ('Blog',BlogSchema)