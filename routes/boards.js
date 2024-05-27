const express = require('express');
const router = express.Router();
const boardController = require('../controllers/boardController');

// Middleware to protect routes (authentication)
const auth = require('../middleware/auth');

// POST api/boards
router.post('/', auth, boardController.createBoard);

module.exports = router;
