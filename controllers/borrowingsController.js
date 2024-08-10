/*
const Borrowing = require('../models/borrowings');

//Criar um novo 
exports.createbook = async (req, res) => {
  const { borrowing_id, user_id, book_id, borrow_date, return_date } = req.body;
  try {
    const new_borrow = await Borrowing.create({ borrowing_id, user_id, book_id, borrow_date, return_date });
    res.status(201).json(new_borrow);
  } catch (err) {
    res.status(500).json({ error: 'Error adding borrowing' });
  }; 
}
*/