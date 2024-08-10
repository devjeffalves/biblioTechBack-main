//Importa o objeto usuario
//const { Op } = require('sequelize');
const UserProfile = require('../models/user_profile');
const User = require('../models/user_register');


// Criar um novo usuário
exports.createuser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await User.create({ name, email , password});
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Error creating user' });
  }
  };

// Obter todos os usuários
exports.getusers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error finding users' });
  }
};

// Atualizar um usuário
exports.updateuser = async (req, res) => {
  const { id } = req.params;
  const { name, age, address } = req.body;
  try {
    const user = await User.findByPk(id);
    if (user) {
      user.name = name;
      user.age = age;
      user.address = address;
      user.updatedAt = new Date();
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error to delete user' });
  }
};

// Deletar um usuário
exports.deleteuser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error to delete user' });
  }
};