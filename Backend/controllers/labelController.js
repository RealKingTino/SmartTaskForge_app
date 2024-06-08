const Label = require('../models/Labels.js');

// Create a new label
exports.createLabel = async (req, res) => {
    const { name, color, board_id } = req.body;

    try {
        const label = new Label({
            name,
            color,
            board_id
        });

        await label.save();
        res.status(201).json(label);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all labels
exports.getAllLabels = async (req, res) => {
    try {
        const labels = await Label.find();
        res.json(labels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific label by ID
exports.getLabelById = async (req, res) => {
    try {
        const label = await Label.findById(req.params.id);

        if (!label) {
            return res.status(404).json({ message: 'Label not found' });
        }

        res.json(label);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
