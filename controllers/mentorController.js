// backend/controllers/mentorController.js

const Mentor = require('../models/Mentor');

// GET all mentors
const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch mentors' });
  }
};

// POST add mentor
const addMentor = async (req, res) => {
  try {
    const newMentor = new Mentor(req.body);
    const savedMentor = await newMentor.save();
    res.status(201).json(savedMentor);
  } catch (err) {
    res.status(400).json({ message: 'Invalid mentor data' });
  }
};

module.exports = {
  getMentors,
  addMentor,
};
