const Board = require('../models/Boards.js');

exports.createBoard = async (req, res) => {
  const { name, description } = req.body;
  const userId = req.userId;

  try {
    const newBoard = new Board({
      name,
      description,
      user_id: userId,
      members: [{ user_id, role: 'admin' }]
    });


    await board.save();
        res.status(201).json(board);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all boards
exports.getAllBoards = async (req, res) => {
  try {
      const boards = await Board.find();
      res.json(boards);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Get a specific board by ID
exports.getBoardById = async (req, res) => {
  try {
      const board = await Board.findById(req.params.id);

      if (!board) {
          return res.status(404).json({ message: 'Board not found' });
      }

      res.json(board);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};