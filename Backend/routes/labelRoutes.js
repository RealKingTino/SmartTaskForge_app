const express = require('express');
const router = express.Router();
const labelController = require('../controllers/labelController');

// Middleware to protect routes (authentication)
const auth = require('../middleware/auth');

// POST api/labels - Create a new label
router.post('/', auth, labelController.createLabel);

// GET api/labels - Get all labels
router.get('/', auth, labelController.getAllLabels);

// GET api/labels/:id - Get a specific label by ID
router.get('/:id', auth, labelController.getLabelById);

module.exports = router;
