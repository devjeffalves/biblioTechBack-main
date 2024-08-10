//Importa o modulo Express
const express = require('express');

//Cria o objeto rotas
const router = express.Router();

//Importa o modulo usuarioController
const UserNotRegisteredController = require('../controllers/user_notRegisteredController');

router.post('/user_notregistered', UserNotRegisteredController.createuser);

router.get('/users_notregistered', UserNotRegisteredController.getusers);

//router.put('/user_profile/:id', userProfileController.updateuser);

//router.delete('/user_profile/:id', userProfileController.deleteuser);

module.exports = router;