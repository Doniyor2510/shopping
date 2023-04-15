const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/");
  
  console.log("Mongo connected");
};
