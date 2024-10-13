const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  task: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  completedAt: { type: Date, default: 0}
});

module.exports = mongoose.model('Todo', todoSchema);
