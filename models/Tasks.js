const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  position: { type: Number, required: true },
  list_id: { type: mongoose.Schema.Types.ObjectId, ref: 'List', required: true },
  due_date: { type: Date },
  comments: [
    {
      content: { type: String, required: true },
      user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      created_at: { type: Date, default: Date.now },
      updated_at: { type: Date, default: Date.now }
    }
  ],
  attachments: [
    {
      url: { type: String, required: true },
      uploaded_at: { type: Date, default: Date.now }
    }
  ],
  labels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Label' }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', TaskSchema);
