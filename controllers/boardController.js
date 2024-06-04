const Board = require('../models/Board');

exports.createBoard = async (req, res) => {
  const { name, description, user_id } = req.body;
  try {
    const newBoard = new Board({
      name,
      description,
      user_id,
      members: [{ user_id, role: 'admin' }]
    });
    const board = await newBoard.save();
    res.json(board);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
