// backend/routes/mentorRoutes.js
const express = require('express');
const router = express.Router();

const {
  getMentors,
  addMentor
} = require('../controllers/mentorController'); // ✅ no typo, no space, lowercase m

router.get('/', getMentors);
router.post('/', addMentor);

module.exports = router;
