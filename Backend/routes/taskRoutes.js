const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Middleware to protect routes (authentication)
const auth = require('../middleware/auth');

// POST api/tasks - Create a new task
router.post('/', auth, taskController.createTask);

// GET api/tasks - Get all tasks
router.get('/', auth, taskController.getAllTasks);

// GET api/tasks/:id - Get a specific task by ID
router.get('/:id', auth, taskController.getTaskById);

module.exports = router;
