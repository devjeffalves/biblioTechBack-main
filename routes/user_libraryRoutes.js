//Importa o modulo Express
const express = require('express');

//Cria o objeto rotas
const router = express.Router();

//Importa o modulo usuarioController
const userLibraryController = require('../controllers/user_libraryController');

router.post('/book', userLibraryController.createbook);

router.get('/user_books', userLibraryController.getbooks);

//router.put('/update_book/:id', userLibraryController.updatbook);

//router.delete('/delete_book/:id', userLibraryController.deletebook);

module.exports = router;