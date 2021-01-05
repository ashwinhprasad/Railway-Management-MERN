const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  train: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "train",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  destination: {
    type: String,
    maxlength: 100,
  },
  startpoint: {
    type: String,
    maxlength: 100,
  },
  startDate: {
    type: Date,
  },
  reachDate: {
    type: Date,
  },
});

module.exports = mongoose.model("book", bookSchema);
