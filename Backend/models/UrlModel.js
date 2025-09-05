const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  }
}, { timestamps: true }); // timestamps => createdAt, updatedAt

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
