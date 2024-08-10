
//Importa o modulo Express
const express = require('express');

//Cria o objeto rotas
const router = express.Router();

//Importa o modulo usuarioController
const userProfileController = require('../controllers/user_profileController');

router.post('/user_profile', userProfileController.createuser);

router.get('/users_profile', userProfileController.getusers);

router.put('/user_profile/:id', userProfileController.updateuser);

router.delete('/user_profile/:id', userProfileController.deleteuser);

module.exports = router;