const { Router } = require('express');
const {usersController } = require('../controllers/usersController');
const usersRouter = new Router();
usersRouter.get('/', usersController.getUsers);  //
usersRouter.get('/:id', usersController.getUserbyId );       
usersRouter.post('/', usersController.createUser);         //
usersRouter.put('/:id', usersController.updateUser);       //
usersRouter.delete('/:id', usersController.deleteUser);    //



module.exports = { usersRouter };
