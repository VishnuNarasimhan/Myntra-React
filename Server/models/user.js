const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  }
});

module.exports = mongoose.model("User", userSchema);
