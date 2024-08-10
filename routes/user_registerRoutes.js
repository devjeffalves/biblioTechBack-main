
//Importa o modulo Express
const express = require('express');

//Cria o objeto rotas
const router = express.Router();

//Importa o modulo usuarioController
const userController = require('../controllers/userController');

router.post('/user_register', userController.createuser);

router.get('/users', userController.getusers);

router.put('/user/:id', userController.updateuser);

router.delete('/user/:id', userController.deleteuser);

module.exports = router;