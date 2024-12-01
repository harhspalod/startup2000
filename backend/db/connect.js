const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true, // Use the unified topology engine
  });
};

module.exports = connectDB;
