const { restaurants } = require("../data/data");
const restaurant = require("../models/restaurantModel");
exports.restaurantsController = {
  async getRestaurants(req, res) {
    const data = await restaurant.find({});
    res.status(200).send(data);
  },
  getRestaurantbyId(req, res) {
    res.json("Get an restaurant");
    const { id } = req.params;
    const restaurant = restaurants.find((restaurant) => restaurant.id == id);
    res.json(restaurant);
  },
  createRestaurant(req, res) {
    res.json("Get an restaurant");
    const { body } = req;
    restaurants.push({ ...body });
    fs.writeFileSync("./data/restaurants.json", JSON.stringify(restaurants));
    res.json(restaurants);
  },
  updateRestaurant(req, res) {
    res.json("Get an restaurant");
    const { id } = req.params;
    const { name, location, stars } = req.body;
    const newRestaurants = orders.map((item) => {
      if (item.id == id) {
        item.id = id;
        item.name = name;
        item.location = location;
        item.stars = stars;
      }
      return item;
    });
    fs.writeFileSync("./data/restaurants.json", JSON.stringify(newRestaurants));
    res.json({ status: "success" });
  },
  deleteRestaurant(req, res) {
    res.json("Get an restaurant");
    const { id } = req.params;
    const newRestaurants = restaurants.filter((item) => item.id != id);
    fs.writeFileSync("./data/restaurants.json", JSON.stringify(newRestaurants));
  },
};
