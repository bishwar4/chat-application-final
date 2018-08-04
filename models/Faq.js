const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

module.exports = Faq = mongoose.model("faq", UserSchema);
