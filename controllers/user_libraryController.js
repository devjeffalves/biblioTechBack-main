const Book = require('../models/user_library');

//Criar um novo 
exports.createbook = async (req, res) => {
  const { title, author, isbn, publish_date, genre, status } = req.body;
  try {
    const newBook = await Book.create({ title, author, isbn, publish_date, genre, status});
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: 'Error adding book' });
  }
}; 

// Obter todos os usuários
exports.getbooks = async (req, res) => {
  try {
    const users = await Book.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error finding users' });
  }
};

/*
// Atualizar um perfil
exports.updateuser = async (req, res) => {
  const { id } = req.params;
  const { name, nickname, birthDate, phoneNumber } = req.body;
  try {
    const user = await Book.findByPk(id);
    if (user) {
      user.name = name;
      user.nickname = nickname;
      user.birthDate = birthDate;
      user.phoneNumber = phoneNumber;
      user.updatedAt = new Date();
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error to update user' });
  }
};

// Deletar um usuário
exports.deleteuser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserProfile.findByPk(id);
    if (user) {
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error to delete user' });
  }
}
  
*/