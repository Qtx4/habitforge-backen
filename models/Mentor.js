// backend/models/Mentor.js

const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
});

module.exports = mongoose.model('Mentor', mentorSchema);
