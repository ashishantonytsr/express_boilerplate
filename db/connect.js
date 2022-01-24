// connect function to connect to DB, using url provided by db
// this fn is imported to app.js and called from there

const mongoose = require("mongoose");

const connectDB = async (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
