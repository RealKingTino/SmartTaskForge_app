const List = require('../models/List');

// Create a new list
exports.createList = async (req, res) => {
    const { name, position, board_id } = req.body;

    try {
        const list = new List({
            name,
            position,
            board_id
        });

        await list.save();
        res.status(201).json(list);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all lists
exports.getAllLists = async (req, res) => {
    try {
        const lists = await List.find();
        res.json(lists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific list by ID
exports.getListById = async (req, res) => {
    try {
        const list = await List.findById(req.params.id);

        if (!list) {
            return res.status(404).json({ message: 'List not found' });
        }

        res.json(list);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
