const { Router } = require('express');
const { restaurantsController } = require('../controllers/restaurantsController');
const restaurantsRouter = new Router();
restaurantsRouter.get('/', restaurantsController.getRestaurants);  //
restaurantsRouter.get('/:id', restaurantsController.getRestaurantbyId );       
restaurantsRouter.post('/', restaurantsController.createRestaurant);         //
restaurantsRouter.put('/:id', restaurantsController.updateRestaurant);       //
restaurantsRouter.delete('/:id', restaurantsController.deleteRestaurant);    //


module.exports = { restaurantsRouter };
