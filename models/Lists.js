const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: Number, required: true },
  board_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Board', required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('List', ListSchema);