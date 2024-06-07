const mongoose = require('mongoose');

const LabelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  board_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Board', required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Label', LabelSchema);
