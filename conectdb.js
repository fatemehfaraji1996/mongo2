const mongoose  = require("mongoose");
const connectDB = (uri) => {
    try {
      return mongoose.connect(uri);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  module.exports = connectDB;