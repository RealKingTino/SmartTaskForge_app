const Task = require('../models/Tasks.js');

// Create a new task
exports.createTask = async (req, res) => {
    const { name, description, position, list_id, due_date, comments, attachments, labels } = req.body;

    try {
        const task = new Task({
            name,
            description,
            position,
            list_id,
            due_date,
            comments,
            attachments,
            labels
        });

        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific task by ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
