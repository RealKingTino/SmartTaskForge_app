const express = require('express');
const router = express.Router();
const boardController = require('../controllers/boardController');
const auth = require('../middleware/auth');

// POST /api/boards - Create a new board
router.post('/', auth, boardController.createBoard);

// GET /api/boards - Get all boards
router.get('/', auth, boardController.getAllBoards);

// GET /api/boards/:id - Get a specific board by ID
router.get('/:id', auth, boardController.getBoardById);

module.exports = router;
