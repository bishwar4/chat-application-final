const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  query: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  resolution: {
    type: String,
    required: true
  }
});

module.exports = Register = mongoose.model("register", UserSchema);
