const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxlength: 50,
  },
  email: {
    type: String,
    maxlength: 100,
    unique: true,
  },
  encry_password: {
    type: String,
  },
  phone: {
    type: String,
    trim: true,
    unique: true,
  },
  salt: {
    type: String,
  },
  is_admin: {
    type: Boolean,
  },
});

module.exports = mongoose.model("user", userSchema);
