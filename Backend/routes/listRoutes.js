const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');

// Middleware to protect routes (authentication)
const auth = require('../middleware/auth');

// POST api/lists - Create a new list
router.post('/', auth, listController.createList);

// GET api/lists - Get all lists
router.get('/', auth, listController.getAllLists);

// GET api/lists/:id - Get a specific list by ID
router.get('/:id', auth, listController.getListById);

module.exports = router;
