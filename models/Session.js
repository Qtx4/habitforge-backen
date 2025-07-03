const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  mentor: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

module.exports = mongoose.model('Session', sessionSchema);
