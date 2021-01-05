const mongoose = require("mongoose");

const TrainSchema = new mongoose.Schema({
  name: {
    trim: true,
    type: String,
    unique: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: false,
    },
  ],
});

module.exports = mongoose.model("train", TrainSchema);
