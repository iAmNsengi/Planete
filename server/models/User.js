const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: string,
    required: true,
  },
  password: {
    type: string,
    required: true,
  },
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;
