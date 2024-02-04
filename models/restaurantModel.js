const mongoose = require("mongoose");
const restaurantSchema = new mongoose.Schema({
  id: Number,
  name: String,
  location: {
    lng: Number,
    lat: Number,
  },
  start: Number,
});
// Create a model based on the schema
const restaurant = mongoose.model("restaurants", restaurantSchema);
module.exports = restaurant;
