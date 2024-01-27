const { Router } = require('express');
const { ordersController } = require('../controllers/ordersController');
const ordersRouter = new Router();
ordersRouter.get('/', ordersController.getOrders);  //
ordersRouter.get('/:id', ordersController.getOrderbyId );       // localhost:3000/api/orders/6
ordersRouter.post('/', ordersController.createOrder);         //
ordersRouter.put('/:id', ordersController.updateOrder);       //
ordersRouter.delete('/:id', ordersController.deleteOrder);    //




module.exports = { ordersRouter };
