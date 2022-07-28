const mongoose = require("mongoose");

// making the schema
const PersonModel = mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

// creating and exporting the model:
module.exports = mongoose.model("Person", PersonModel);
